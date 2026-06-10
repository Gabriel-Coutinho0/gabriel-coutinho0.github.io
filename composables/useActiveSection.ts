export function useActiveSection(sectionIds: string[]) {
  const activeSection = ref("");
  const isManualScrolling = ref(false);

  const headerOffset = 120;

  function setHash(id: string) {
    window.history.replaceState(
      null,
      "",
      id ? `#${id}` : window.location.pathname,
    );
  }

  function getCurrentSection() {
    const scrollPosition = window.scrollY + headerOffset + 40;

    let currentSection = "";

    for (const id of sectionIds) {
      const section = document.getElementById(id);

      if (!section) continue;

      if (scrollPosition >= section.offsetTop) {
        currentSection = id;
      }
    }

    return currentSection;
  }

  function updateActiveSection() {
    if (isManualScrolling.value) return;

    const currentSection = getCurrentSection();

    if (!currentSection) return;

    if (activeSection.value === currentSection) return;

    activeSection.value = currentSection;
    setHash(currentSection);
  }

  function scrollToSection(id: string) {
    const section = document.getElementById(id);

    if (!section) return;

    isManualScrolling.value = true;
    activeSection.value = id;
    setHash(id);

    const sectionTop = section.offsetTop;

    window.scrollTo({
      top: sectionTop - headerOffset,
      behavior: "smooth",
    });

    setTimeout(() => {
      isManualScrolling.value = false;
      updateActiveSection();
    }, 900);
  }

  function scrollToTop() {
    isManualScrolling.value = true;
    activeSection.value = "";

    window.history.replaceState(null, "", window.location.pathname);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      isManualScrolling.value = false;
    }, 900);
  }

  onMounted(() => {
    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", updateActiveSection);
  });

  return {
    activeSection,
    scrollToSection,
    scrollToTop,
  };
}
