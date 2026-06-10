export function useActiveSection(sectionIds: string[]) {
  const activeSection = ref("");
  const isScrollingToTop = ref(false);

  const route = useRoute();
  const router = useRouter();

  function scrollToTop() {
    isScrollingToTop.value = true;
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
      isScrollingToTop.value = false;
    }, 800);
  }

  onMounted(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingToTop.value) return;

        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (!visibleEntry) return;

        const id = visibleEntry.target.id;

        if (activeSection.value === id) return;

        activeSection.value = id;

        router.replace({
          path: route.path,
          hash: `#${id}`,
        });
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
    scrollToTop,
  };
}
