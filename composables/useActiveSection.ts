export function useActiveSection(sectionIds: string[]) {
  const activeSection = ref("");
  const isManualScrolling = ref(false);

  function setHash(id: string) {
    window.history.replaceState(
      null,
      "",
      id ? `#${id}` : window.location.pathname,
    );
  }

  function scrollToSection(id: string) {
    const section = document.getElementById(id);

    if (!section) return;

    isManualScrolling.value = true;
    activeSection.value = id;
    setHash(id);

    const headerOffset = 100;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionTop - headerOffset,
      behavior: "smooth",
    });

    setTimeout(() => {
      isManualScrolling.value = false;
    }, 1200);
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
    }, 1200);
  }

  onMounted(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScrolling.value) return;

        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) return;

        const id = visibleEntry.target.id;

        if (activeSection.value === id) return;

        activeSection.value = id;
        setHash(id);
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    onBeforeUnmount(() => {
      observer.disconnect();
    });
  });

  return {
    activeSection,
    scrollToSection,
    scrollToTop,
  };
}
