import { lazy } from "react";

// Import all components from algorithms folder (supports .js, .jsx, .tsx)
const modules = import.meta.glob("../algorithms/**/*.{js,jsx,tsx}");

// Helper function to dynamically import component
const createLazyComponent = (category, componentName) => {
  const path = `../algorithms/${category}/${componentName}.jsx`;
  const importer = modules[path];
  console.log(importer);
  if (!importer) {
    console.error(`Component not found: ${category}/${componentName}`);
    return lazy(() => import("./FallbackComponent"));
  }

  return lazy(() =>
    importer().catch((error) => {
      console.error(
        `Failed to load component: ${category}/${componentName}`,
        error
      );
      return import("./FallbackComponent");
    })
  );
};

// Dynamic component loader with caching
export const loadComponent = (category, componentName) => {
  const cacheKey = `${category}-${componentName}`;
  if (!loadComponent._cache) loadComponent._cache = {};

  if (!loadComponent._cache[cacheKey]) {
    loadComponent._cache[cacheKey] = createLazyComponent(
      category,
      componentName
    );
  }

  return loadComponent._cache[cacheKey];
};

// Batch load all components from a category
export const loadCategoryComponents = (category, componentNames) => {
  const components = {};
  componentNames.forEach((name) => {
    components[name] = createLazyComponent(category, name);
  });
  return components;
};

// Preload algorithm components (optional)
export const preloadComponents = (questionsData) => {
  Object.entries(questionsData).forEach(([category, questions]) => {
    questions.forEach((question) => {
      if (question.component) {
        loadComponent(category, question.component);
      }
    });
  });
};
