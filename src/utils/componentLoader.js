import { lazy } from "react";

// Import all components from algorithms folder (supports .js, .jsx, .tsx)
const modules = import.meta.glob("../algorithms/**/*.{js,jsx,tsx}");

const createLazyComponent = (category, componentName) => {
  // Try to find a matching module path regardless of extension
  const pathKey = Object.keys(modules).find(
    (key) =>
      key.endsWith(`/algorithms/${category}/${componentName}.jsx`) ||
      key.endsWith(`/algorithms/${category}/${componentName}.js`) ||
      key.endsWith(`/algorithms/${category}/${componentName}.tsx`)
  );

  if (!pathKey) {
    console.error(`Component not found: ${category}/${componentName}`);
    return lazy(() => import("./FallbackComponent"));
  }

  return lazy(() =>
    modules[pathKey]().catch((error) => {
      console.error(
        `Failed to load component: ${category}/${componentName}`,
        error
      );
      return import("./FallbackComponent");
    })
  );
};

/**
 * Dynamic component loader with caching
 */
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

export const loadCategoryComponents = (category, componentNames) => {
  const components = {};
  componentNames.forEach((name) => {
    components[name] = createLazyComponent(category, name);
  });
  return components;
};

export const preloadComponents = (questionsData) => {
  Object.entries(questionsData).forEach(([category, questions]) => {
    questions.forEach((question) => {
      if (question.component) {
        loadComponent(category, question.component);
      }
    });
  });
};
