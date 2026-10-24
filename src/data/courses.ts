export type Course = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  price: string;
};

export const courses: Course[] = [
  { slug: "course-one", category: "Next.js", title: "[Course title]", summary: "[One-line outcome students get from this course.]", price: "[PRICE]" },
  { slug: "course-two", category: "AI building", title: "[Course title]", summary: "[One-line outcome students get from this course.]", price: "[PRICE]" },
  { slug: "course-three", category: "Photography", title: "[Course title]", summary: "[One-line outcome students get from this course.]", price: "[PRICE]" },
];