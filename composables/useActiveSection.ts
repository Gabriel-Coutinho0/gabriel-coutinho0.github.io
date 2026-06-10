export function useActiveSection(sectionIds: string[]) {
  const activeSection = ref("");
  const isManualScrolling = ref(false);

  const route = useRoute();
  const router = useRouter();

  function updateHash(id: string) {
    router.replace({
      path: route.path,
      hash: id ? `#${id}` : "",
    });
  }

  function scrollToSection(id: string) {
    const section = document.getElementById(id);

    if (!section) return;

    isManualScrolling.value = true;
    activeSection.value = id;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    updateHash(id);

    setTimeout(() => {
      isManualScrolling.value = false;
    }, 900);
  }

  function scrollToTop() {
    isManualScrolling.value = true;
    activeSection.value = "";

    router.replace({
      path: route.path,
      hash: "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      isManualScrolling.value = false;
    }, 900);
  }

  onMounted(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScrolling.value) return;

        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (!visibleEntry) return;

        const id = visibleEntry.target.id;

        if (activeSection.value === id) return;

        activeSection.value = id;
        updateHash(id);
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
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
