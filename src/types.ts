export interface Nutrient {
  id: string;
  name: string;
  category: 'Macronutriente' | 'Micronutriente' | 'Esencial';
  iconName: string;
  function: string;
  foodSources: string[];
  benefits: string[];
  detailedDescription: string;
  image: string;
  badgeColor: string;
}

export interface FoodGroup {
  id: string;
  name: string;
  description: string;
  examples: string[];
  portionTip: string;
  iconName: string;
  image: string;
  accentBg: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
  keyStat: string;
}

export interface Recipe {
  id: string;
  title: string;
  category: 'Desayunos' | 'Almuerzos' | 'Cenas' | 'Snacks' | 'Bebidas';
  prepTime: string;
  servings: string;
  difficulty: 'Fácil' | 'Intermedio' | 'Especial';
  image: string;
  description: string;
  ingredients: string[];
  steps: string[];
  nutritionHighlights: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
  contentSections: {
    heading: string;
    text: string;
  }[];
  interactiveType?: 'labelReader' | 'sugarCalculator' | 'hydrationGuide';
}

export interface Myth {
  id: string;
  question: string;
  isMyth: boolean; // true = Myth, false = Fact
  shortVerdict: string;
  scientificExplanation: string;
  evidenceSource: string;
  category: string;
}

export interface HealthyTip {
  id: string;
  title: string;
  summary: string;
  iconName: string;
  actionPoints: string[];
  hasCalculator?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Frutas' | 'Verduras' | 'Comidas saludables' | 'Personas cocinando' | 'Familias compartiendo' | 'Mercados frescos';
  imageUrl: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  topic: string;
  message: string;
}
