import { Nutrient, FoodGroup, Benefit, Recipe, BlogPost, Myth, HealthyTip, GalleryItem } from '../types';

export const NUTRIENTS_DATA: Nutrient[] = [
  {
    id: 'carbohidratos',
    name: 'Carbohidratos',
    category: 'Macronutriente',
    iconName: 'Zap',
    function: 'Principal fuente de energía rápida y sostenible para el cerebro, sistema nervioso y músculos.',
    foodSources: ['Avena integral', 'Arroz integral', 'Camote / Batata', 'Frutas frescas', 'Legumbres'],
    benefits: [
      'Mantienen los niveles de energía diarios',
      'Mejoran el rendimiento físico y mental',
      'Aportan glucosa esencial para el cerebro'
    ],
    detailedDescription: 'Los carbohidratos complejos se descomponen gradualmente en el organismo, evitando picos drásticos de glucosa en sangre y brindando una saciedad prolongada.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200'
  },
  {
    id: 'proteinas',
    name: 'Proteínas',
    category: 'Macronutriente',
    iconName: 'Activity',
    function: 'Estructura y reparación de tejidos, formación de enzimas, hormonas y células del sistema inmune.',
    foodSources: ['Huevos', 'Pescado azul', 'Pechuga de pavo/pollo', 'Tofu y tempeh', 'Lentejas y garbanzos'],
    benefits: [
      'Favorecen la masa muscular y regeneración celular',
      'Brindan alta capacidad de saciedad',
      'Sostienen la respuesta inmunitaria'
    ],
    detailedDescription: 'Compuestas por aminoácidos (esenciales y no esenciales). Combinar legumbres con cereales integrales permite obtener proteínas vegetales completas.',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-200'
  },
  {
    id: 'grasas-saludables',
    name: 'Grasas Saludables',
    category: 'Macronutriente',
    iconName: 'Heart',
    function: 'Absorción de vitaminas liposolubles (A, D, E, K), protección cardiovascular y salud cerebral.',
    foodSources: ['Aceite de oliva virgen extra', 'Aguacate / Palta', 'Nueces y almendras', 'Semillas de chía y lino', 'Salmón'],
    benefits: [
      'Regulan los niveles de colesterol HDL',
      'Reducen la inflamación sistémica',
      'Sostienen el equilibrio hormonal'
    ],
    detailedDescription: 'Las grasas monoinsaturadas y poliinsaturadas (Omega-3 y Omega-6) son esenciales para el funcionamiento óptimo de la membrana celular.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'bg-lime-100 text-lime-800 border-lime-200'
  },
  {
    id: 'vitaminas',
    name: 'Vitaminas',
    category: 'Micronutriente',
    iconName: 'Sun',
    function: 'Catalizan procesos metabólicos, refuerzan defensas e intervienen en la visión y visión cutánea.',
    foodSources: ['Cítricos (Vit C)', 'Zanahorias y espinacas (Vit A)', 'Frutos secos (Vit E)', 'Lácteos e iluminación solar (Vit D)'],
    benefits: [
      'Protegen las células contra el estrés oxidativo',
      'Promueven una piel y visión radiante',
      'Ayudan a transformar los alimentos en energía'
    ],
    detailedDescription: 'Se dividen en hidrosolubles (C y complejo B) y liposolubles (A, D, E, K). Consumir colores variados garantiza un abanico completo.',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'bg-yellow-100 text-yellow-800 border-yellow-200'
  },
  {
    id: 'minerales',
    name: 'Minerales',
    category: 'Micronutriente',
    iconName: 'Shield',
    function: 'Estructura ósea, transmisión de impulsos nerviosos, equilibrio hídrico y transporte de oxígeno.',
    foodSources: ['Sésamo y lácteos (Calcio)', 'Espinacas y carnes (Hierro)', 'Plátano y aguacate (Potasio)', 'Cacao puro y semillas (Magnesio)'],
    benefits: [
      'Fortalecen huesos y dientes',
      'Previenen calambres y fatiga muscular',
      'Optimizan la oxigenación celular'
    ],
    detailedDescription: 'Elementos inorgánicos clave como calcio, hierro, magnesio, zinc y potasio. No se sintetizan en el cuerpo y deben provenir de la dieta.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200'
  },
  {
    id: 'fibra',
    name: 'Fibra Dietética',
    category: 'Esencial',
    iconName: 'Feather',
    function: 'Nutre la microbiota intestinal, promueve el tránsito saludable y regula absorción de azúcares y grasas.',
    foodSources: ['Manzanas y peras con piel', 'Avena y salvado', 'Semillas de linaza', 'Legumbres', 'Verduras de hoja verde'],
    benefits: [
      'Mejora la salud digestiva y microbiota',
      'Estabiliza los niveles de glucosa',
      'Previene el estreñimiento y da saciedad'
    ],
    detailedDescription: 'Existen dos tipos: soluble (forma geles que atrapan colesterol) e insoluble (agrega volumen al bolo fecal y agiliza el tránsito).',
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-200'
  },
  {
    id: 'agua',
    name: 'Agua e Hidratación',
    category: 'Esencial',
    iconName: 'Droplet',
    function: 'Medio donde ocurren las reacciones bioquímicas, regulación térmica, lubricación articular y desecho de toxinas.',
    foodSources: ['Agua potable pura', 'Infusiones sin azúcar', 'Pepino, sandía, melón', 'Caldos claros de verduras'],
    benefits: [
      'Mantiene la concentración y claridad mental',
      'Favorece el rendimiento muscular',
      'Ayuda a la digestión y eliminación eficiente'
    ],
    detailedDescription: 'Representa entre el 60% y 70% del peso corporal adulto. Mantener una hidratación constante es pilar básico de vitalidad.',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-200'
  }
];

export const FOOD_GROUPS_DATA: FoodGroup[] = [
  {
    id: 'frutas',
    name: 'Frutas',
    description: 'Ricas en agua, vitaminas C y A, antioxidantes y fructosa natural acompañada de fibra intacta.',
    examples: ['Manzanas', 'Naranjas', 'Fresas', 'Plátano', 'Arándanos', 'Kiwi'],
    portionTip: 'Consume entre 2 a 3 porciones al día, preferiblemente enteras y con piel cuando sea comestible.',
    iconName: 'Apple',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=800&q=80',
    accentBg: 'bg-orange-50 border-orange-200'
  },
  {
    id: 'verduras',
    name: 'Verduras y Hortalizas',
    description: 'Base fundamental de la densidad nutricional: bajas en calorías, repletas de fitoquímicos, minerales y fibra.',
    examples: ['Brócoli', 'Espinaca', 'Zanahoria', 'Calabacín', 'Pimiento', 'Tomate'],
    portionTip: 'Llega al menos a 2 raciones diarias (una en crudo como ensalada y otra cocinada al vapor o asada).',
    iconName: 'Carrot',
    image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=800&q=80',
    accentBg: 'bg-lime-50 border-lime-200'
  },
  {
    id: 'cereales-integrales',
    name: 'Cereales Integrales',
    description: 'Grano completo conservando el salvado, germen y endospermo. Energía progresiva sin refinados.',
    examples: ['Avena', 'Quinoa', 'Arroz integral', 'Pan 100% trigo integral', 'Centeno'],
    portionTip: 'Elige siempre versiones integrales frente a las refinadas para asegurar mayor saciedad y nutrientes.',
    iconName: 'Wheat',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80',
    accentBg: 'bg-amber-50 border-amber-200'
  },
  {
    id: 'legumbres',
    name: 'Legumbres',
    description: 'Superalimentos vegetales cargados de proteína de gran valor, fibra soluble, hierro y zinc.',
    examples: ['Garbanzos', 'Lentejas', 'Frijoles / Alubias', 'Edamame', 'Guisantes'],
    portionTip: 'Inclúyelas de 3 a 4 veces por semana en ensaladas, guisos ligeros o cremas tipo hummus.',
    iconName: 'Bean',
    image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=800&q=80',
    accentBg: 'bg-amber-100 border-amber-300'
  },
  {
    id: 'lacteos',
    name: 'Lácteos y Alternativas Fortificadas',
    description: 'Aportan calcio de alta disponibilidad, fósforo, proteína y probióticos naturales en fermentados.',
    examples: ['Yogur natural sin azúcar', 'Kéfir', 'Queso fresco', 'Bebidas de almendra/soja con calcio'],
    portionTip: 'Prioriza fermentados sin azúcares añadidos para potenciar tu microbiota digestiva.',
    iconName: 'Milk',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80',
    accentBg: 'bg-yellow-50 border-yellow-200'
  },
  {
    id: 'carnes-pescado-huevos',
    name: 'Carnes, Pescados y Huevos',
    description: 'Fuentes de proteína completa con todos los aminoácidos esenciales, vitamina B12 y hierro hemo.',
    examples: ['Salmón y sardinas', 'Pechuga de pavo', 'Huevos ecológicos', 'Merluza y bacalao'],
    portionTip: 'Aumenta el consumo de pescado azul (rico en Omega-3) y modera las carnes rojas y procesados.',
    iconName: 'Egg',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    accentBg: 'bg-orange-50 border-orange-200'
  },
  {
    id: 'frutos-secos-semillas',
    name: 'Frutos Secos y Semillas',
    description: 'Concentrados de nutrientes, ácidos grasos saludables, vitamina E, magnesio y antioxidantes.',
    examples: ['Nueces', 'Almendras', 'Semillas de chía', 'Semillas de calabaza', 'Avellanas'],
    portionTip: 'Consúmelos al natural o tostados sin sal ni frituras. Una porción equivale a un puñado cerrado (30g).',
    iconName: 'Nut',
    image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d96?auto=format&fit=crop&w=800&q=80',
    accentBg: 'bg-emerald-50 border-emerald-200'
  },
  {
    id: 'grasas-saludables',
    name: 'Grasas Saludables Cardioprotectoras',
    description: 'Lípidos indispensables para la función cerebral, síntesis celular y respuesta antiinflamatoria.',
    examples: ['Aceite de Oliva Virgen Extra (AOVE)', 'Aguacate', 'Aceite de sésamo', 'Semillas de lino molidas'],
    portionTip: 'El AOVE es el rey de la cocina mediterránea; agrégalo en crudo para aderezar tus platos.',
    iconName: 'Flame',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80',
    accentBg: 'bg-lime-50 border-lime-300'
  }
];

export const BENEFITS_DATA: Benefit[] = [
  {
    id: 'energia',
    title: 'Más Energía Constante',
    description: 'Evita los altibajos drásticos de fatiga manteniendo glucosa equilibrada con alimentos ricos en fibra y carbohidratos complejos.',
    iconName: 'Zap',
    keyStat: '+85% Vitalidad diaria'
  },
  {
    id: 'inmune',
    title: 'Mejor Sistema Inmunológico',
    description: 'Las vitaminas C, D, zinc y antioxidantes refuerzan las barreras naturales frente a infecciones y patógenos.',
    iconName: 'ShieldCheck',
    keyStat: 'Defensas activas'
  },
  {
    id: 'digestion',
    title: 'Digestión Ligera y Fluida',
    description: 'La fibra vegetal y la hidratación continua nutren la flora microbiana favoreciendo el bienestar intestinal sin pesadez.',
    iconName: 'Sparkles',
    keyStat: 'Microbiota equilibrada'
  },
  {
    id: 'prevencion',
    title: 'Prevención de Enfermedades',
    description: 'Una dieta rica en vegetales reduce significativamente el riesgo de diabetes tipo 2, hipertensión y patologías cardiacas.',
    iconName: 'HeartPulse',
    keyStat: 'Salud cardiovascular'
  },
  {
    id: 'concentracion',
    title: 'Mejor Concentración y Enfoque',
    description: 'Los ácidos grasos Omega-3 y antioxidantes estimulan la neuroplasticidad, memoria y agilidad mental durante el día.',
    iconName: 'Brain',
    keyStat: 'Enfoque sostenido'
  },
  {
    id: 'bienestar',
    title: 'Bienestar Físico y Emocional',
    description: 'La nutrición adecuada influye directamente en la producción de serotonina intestinal, reduciendo la ansiedad y el estrés.',
    iconName: 'Smile',
    keyStat: 'Animo pleno'
  }
];

export const RECIPES_DATA: Recipe[] = [
  {
    id: 'desayuno-bowl-avena',
    title: 'Bowl de Avena con Frutas del Bosque y Chía',
    category: 'Desayunos',
    prepTime: '10 min',
    servings: '1 porción',
    difficulty: 'Fácil',
    image: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=800&q=80',
    description: 'Un desayuno reconfortante y lleno de fibra, antioxidantes y energía de liberación lenta.',
    ingredients: [
      '40g de copos de avena integral',
      '200ml de leche o bebida vegetal de almendra sin azúcar',
      '1 cucharada de semillas de chía',
      '1/2 taza de arándanos y frambuesas frescas',
      '1 cucharadita de crema de almendras 100% natural',
      'Canela en polvo al gusto'
    ],
    steps: [
      'Calentar la avena con la bebida vegetal a fuego medio durante 5 minutos revolviendo suavemente.',
      'Añadir las semillas de chía y un toque de canela para espesar.',
      'Servir en un tazón profundo y decorar con las frutas del bosque frescas.',
      'Culminar con un hilo de crema de almendras pura.'
    ],
    nutritionHighlights: ['Alto en fibra soluble', 'Rico en antioxidantes', '0% azúcares añadidos']
  },
  {
    id: 'almuerzo-quinoa-salmon',
    title: 'Ensalada Templada de Quinoa, Salmón y Aguacate',
    category: 'Almuerzos',
    prepTime: '20 min',
    servings: '2 porciones',
    difficulty: 'Fácil',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    description: 'Un plato completo que reúne carbohidratos complejos, proteína magra y grasas cardioprotectoras.',
    ingredients: [
      '1 taza de quinoa cocida',
      '150g de lomo de salmón fresco a la plancha',
      '1/2 aguacate maduro en cubos',
      '1 taza de hojas de espinaca tierna y rúcula',
      '6 tomates cherry cortados por la mitad',
      'Aderezo: Aceite de oliva virgen extra, zumo de limón y pizca de sal marina'
    ],
    steps: [
      'Cocinar la quinoa previa enjuagada en agua hirviendo durante 12-15 min y dejar enfriar.',
      'Sellar el salmón a la plancha con unas gotas de AOVE y desmenuzar ligeramente.',
      'En un tazón amplio, combinar las espinacas, rúcula, quinoa, tomates cherry y aguacate.',
      'Incorporar el salmón y aliñar con el aderezo de AOVE y limón recién exprimido.'
    ],
    nutritionHighlights: ['Omega-3 de origen marino', 'Proteínas completas', 'Gran valor vitamínico']
  },
  {
    id: 'cena-crema-calabaza',
    title: 'Crema de Calabaza, Cúrcuma y Semillas Tostadas',
    category: 'Cenas',
    prepTime: '25 min',
    servings: '3 porciones',
    difficulty: 'Fácil',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    description: 'Una cena reconfortante, de fácil digestión, ideal para preparar el descanso nocturno.',
    ingredients: [
      '500g de calabaza / zapallo en trozos',
      '1 zanahoria grande',
      '1/2 cebolla dulce',
      '1 cucharadita de cúrcuma en polvo y pizca de pimienta negra',
      '2 cucharadas de semillas de calabaza tostadas',
      'Caldo de verduras casero bajo en sodio'
    ],
    steps: [
      'Sofrreír ligeramente la cebolla y zanahoria con una cucharadita de AOVE.',
      'Añadir la calabaza, cubrir con caldo de verduras y cocinar a fuego lento durante 18 minutos.',
      'Triturar todo en batidora hasta obtener una textura suave y sedosa.',
      'Servir en cuencos, espolvorear la cúrcuma y decorar con las semillas de calabaza crujientes.'
    ],
    nutritionHighlights: ['Muy baja en calorías', 'Acción antiinflamatoria', 'Rica en betacarotenos']
  },
  {
    id: 'snack-hummus-bastones',
    title: 'Hummus Tradicional con Bastones de Verdura Fresca',
    category: 'Snacks',
    prepTime: '10 min',
    servings: '2-4 porciones',
    difficulty: 'Fácil',
    image: 'https://images.unsplash.com/photo-1628835222002-3c82ef9ff8ee?auto=format&fit=crop&w=800&q=80',
    description: 'El aperitivo ideal: cremoso, saciante y repleto de minerales e hidratos de lenta absorción.',
    ingredients: [
      '1 bote de garbanzos cocidos (400g) enjuagados',
      '2 cucharadas de tahini (pasta de sésamo)',
      '1 diente de ajo pequeño',
      'Zumo de 1/2 limón',
      '3 cucharadas de AOVE y pizca de comino',
      'Acompañamiento: Bastones de zanahoria, pepino y pimiento rojo'
    ],
    steps: [
      'Colocar en el procesador los garbanzos, tahini, ajo, zumo de limón, comino y AOVE.',
      'Procesar añadiendo 2-3 cucharadas de agua helada hasta lograr una mezcla aterciopelada.',
      'Lavar y cortar las verduras en bastones alargados crujientes.',
      'Servir el hummus decorado con un chorrito de AOVE y pimentón dulce.'
    ],
    nutritionHighlights: ['Proteína y fibra vegetal', 'Grasas saludables', 'Ideal para picoteo nutritivo']
  },
  {
    id: 'bebida-infusion-citricos',
    title: 'Agua Aromatizada de Cítricos, Menta y Jengibre',
    category: 'Bebidas',
    prepTime: '5 min',
    servings: '1 litro',
    difficulty: 'Fácil',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80',
    description: 'Refrescante y sin azúcar añadido, genial para mantener la hidratación durante todo el día.',
    ingredients: [
      '1 litro de agua fresca o con gas suave',
      '1/2 naranja en rodajas finas',
      '1/2 limón o lima fresca',
      '4 láminas finas de jengibre fresco',
      'Hojas de menta o hierbabuena fresca'
    ],
    steps: [
      'Lavar bien la fruta y cortarla en rodajas delgadas.',
      'En una jarra de cristal, colocar las rodajas de cítricos, el jengibre y la menta ligeramente machacada.',
      'Vertir el agua helada y dejar reposar en refrigeración durante al menos 30 minutos.',
      'Disfrutar fría a lo largo del día.'
    ],
    nutritionHighlights: ['Cero calorías vacías', 'Toque de vitamina C', 'Estimula el consumo de agua']
  }
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'empezar-comer-saludable',
    title: 'Cómo empezar a comer saludable sin dietas restrictivas',
    summary: 'Descubre cómo transformar tus hábitos paso a paso sin pasar hambre, prohibiciones ni obsesión por las calorías.',
    category: 'Hábitos y Estilo de Vida',
    readTime: '4 min de lectura',
    date: '20 Julio, 2026',
    author: 'Equipo Pinceladas de Salud',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
    tags: ['Cambio de Hábitos', 'Nutrición Consciente', 'Bienestar'],
    contentSections: [
      {
        heading: '1. Cambia el enfoque: Suma antes de restar',
        text: 'En lugar de pensar en todos los alimentos que "debes eliminar", enfócate en añadir más vegetales, frutas, agua y semillas a tus comidas diarias. La abundancia de comida real desplaza de manera natural a los ultraprocesados.'
      },
      {
        heading: '2. Cocina más en casa con ingredientes simples',
        text: 'Preparar tus propias comidas te da control total sobre la calidad de las grasas, la cantidad de sal y la ausencia de aditivos innecesarios. No necesitas recetas complejas: vegetales asados, una proteína limpia y un cereal integral son la base perfecta.'
      },
      {
        heading: '3. Escucha tus señales de hambre y saciedad',
        text: 'Aprender a comer despacio y masticar conscientemente le permite a tu cerebro procesar las hormonas de saciedad (como la leptina), evitando los atracones y la pesadez estomacal.'
      }
    ]
  },
  {
    id: 'cinco-habitos-nutricion',
    title: 'Cinco hábitos sencillos que mejorarán tu alimentación diaria',
    summary: 'Poblaciones longevas comparten patrones simples. Te mostramos 5 acciones cotidianas con un impacto gigante en tu salud.',
    category: 'Educación Nutricional',
    readTime: '5 min de lectura',
    date: '15 Julio, 2026',
    author: 'Dra. Elena Ramos',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    tags: ['Estrategia', 'Rutina Diaria', 'Salud Preventiva'],
    contentSections: [
      {
        heading: '1. Ten siempre verdura preparada en tu refrigerador',
        text: 'Si al abrir el refrigerador ves bastones de zanahoria, pimientos o verduras ya lavadas, será tu primera opción rápida para merendar o complementar un almuerzo.'
      },
      {
        heading: '2. Sustituye refrescos por agua con sabor natural',
        text: 'Infusionar agua con láminas de pepino, menta o frutos rojos elimina gramos masivos de azúcar sin sacrificar la frescura.'
      },
      {
        heading: '3. Planifica 3 comidas principales con proteína de calidad',
        text: 'La proteína en cada comida mantiene tu metabolismo estable y previene los antojos dulce nocturnos.'
      }
    ]
  },
  {
    id: 'leer-etiquetas-nutricionales',
    title: 'Guía práctica: Cómo leer e interpretar las etiquetas nutricionales',
    summary: 'Aprende a identificar azúcares ocultos, grasas trans y la lista real de ingredientes detrás de la mercadotecnia.',
    category: 'Educación al Consumidor',
    readTime: '6 min de lectura',
    date: '10 Julio, 2026',
    author: 'Nutr. Carlos Mendoza',
    image: 'https://images.unsplash.com/photo-1506484381205-f7945653044d?auto=format&fit=crop&w=800&q=80',
    tags: ['Etiquetado', 'Compras Conscientes', 'Transparencia'],
    interactiveType: 'labelReader',
    contentSections: [
      {
        heading: 'Regla de oro: La lista de ingredientes manda',
        text: 'Los ingredientes aparecen ordenados de mayor a menor cantidad. Si el azúcar o los aceites refinados están entre los primeros tres lugares, el producto no es la mejor opción diaria.'
      },
      {
        heading: 'Cuidado con las porciones declaradas',
        text: 'A menudo el paquete dice "100 kcal", pero la tabla corresponde a solo 1/4 del paquete total. Multiplica por el número real de porciones que vas a consumir.'
      },
      {
        heading: 'Los muchos nombres del azúcar',
        text: 'Jarabe de maíz de alta fructosa, dextrosa, maltodextrina, néctar de agave, miel de caña y jugos concentrados son formas de azúcar añadido.'
      }
    ]
  },
  {
    id: 'importancia-hidratacion',
    title: 'La ciencia de la hidratación: Más allá de los 8 vasos de agua',
    summary: 'Descubre cuánta agua requiere realmente tu cuerpo según tu peso, clima y nivel de actividad física.',
    category: 'Fisiología y Salud',
    readTime: '4 min de lectura',
    date: '05 Julio, 2026',
    author: 'Equipo Pinceladas de Salud',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    tags: ['Agua', 'Hidratación', 'Vitalidad'],
    interactiveType: 'hydrationGuide',
    contentSections: [
      {
        heading: '¿Por qué la deshidratación leve afecta tu concentración?',
        text: 'Una pérdida de tan solo el 1.5% del agua corporal reduce la memoria de trabajo, aumenta la irritabilidad y suele confundirse con sensación de hambre.'
      },
      {
        heading: 'Los electrolitos también cuentan',
        text: 'Si sudas intensamente o hace mucho calor, reponer sodio, potasio y magnesio mediante frutas jugosas como la sandía o caldos vegetales es fundamental.'
      }
    ]
  },
  {
    id: 'ideas-lonchera-saludables',
    title: 'Ideas creativas para una lonchera escolar y laboral nutritiva',
    summary: 'Opciones coloridas, sabrosas y equilibradas para mantener la energía en la escuela o la oficina sin recurrir a ultraprocesados.',
    category: 'Familias y Niños',
    readTime: '5 min de lectura',
    date: '28 Junio, 2026',
    author: 'Lic. Sofia Paredes',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
    tags: ['Lonchera', 'Niños', 'Almuerzos Faciles'],
    contentSections: [
      {
        heading: 'La fórmula mágica de la lonchera',
        text: 'Combina 1 vegetal crujiente + 1 fruta entera + 1 fuente de proteína (huevo duro, edamame, queso) + 1 carbohidrato complejo (pan integral, avena).'
      },
      {
        heading: 'Presentaciones divertidas e higiénicas',
        text: 'Usar recipientes con compartimentos (bento boxes) evita que las texturas se mezclen y mantiene la comida atractiva hasta la hora del receso.'
      }
    ]
  },
  {
    id: 'reducir-consumo-azucar',
    title: 'Estrategias efectivas para reducir el azúcar sin sufrir ansiedad',
    summary: 'Aprende a reeducar el paladar gradualmente para volver a disfrutar de los sabores dulces naturales de la comida.',
    category: 'Desintoxicación y Paladar',
    readTime: '5 min de lectura',
    date: '20 Junio, 2026',
    author: 'Equipo Pinceladas de Salud',
    image: 'https://images.unsplash.com/photo-1514849302-984523450ce4?auto=format&fit=crop&w=800&q=80',
    tags: ['Azúcar', 'Salud Metabólica', 'Recetas Sin Azúcar'],
    contentSections: [
      {
        heading: '1. Reduce progresivamente en infusiones y café',
        text: 'Si usas 2 cucharaditas de azúcar en el café, pasa a 1 durante una semana y luego a media. Tu paladar se adapta en menos de 14 días.'
      },
      {
        heading: '2. Usa canela, vainilla y nuez moscada',
        text: 'Estas especias aportan un aroma dulce envolvente que engaña al cerebro reduciendo la necesidad de endulzantes.'
      }
    ]
  }
];

export const MYTHS_DATA: Myth[] = [
  {
    id: 'carbohidratos-engordan',
    question: '¿Los carbohidratos de noche engordan más que de día?',
    isMyth: true,
    category: 'Metabolismo',
    shortVerdict: 'MITO: Una caloría no cambia según la hora del reloj.',
    scientificExplanation: 'El balance energético global y la calidad del carbohidrato (complejo vs azúcares refinados) determinan su impacto metabólico. Los carbohidratos integrales por la noche pueden incluso favorecer la producción de serotonina y melatonina, ayudando a conciliar el sueño.',
    evidenceSource: 'Revisiones sistemáticas de la European Society for Clinical Nutrition and Metabolism (ESPEN).'
  },
  {
    id: 'saltarse-comidas-adelgazar',
    question: '¿Saltarse comidas o ayunar sin guía ayuda a bajar de peso rápidamente?',
    isMyth: true,
    category: 'Peso y Dietas',
    shortVerdict: 'MITO: Saltarse comidas suele provocar atracones posteriores por ansiedad.',
    scientificExplanation: 'Privar al cuerpo de alimentos de forma caótica altera la grelina (hormona del hambre) y reduce el gasto metabólico de reposo. Lo verdaderamente efectivo es la regularidad y densidad nutricional de las comidas.',
    evidenceSource: 'Academy of Nutrition and Dietetics.'
  },
  {
    id: 'alimentos-light-saludables',
    question: '¿Todos los alimentos etiquetados como "light" o "0%" son saludables?',
    isMyth: true,
    category: 'Etiquetado',
    shortVerdict: 'MITO: "Light" solo significa un 30% menos de algún ingrediente frente al original.',
    scientificExplanation: 'Para compensar la pérdida de sabor al reducir grasa, muchos fabricantes añaden azúcares, almidones modificados y sodio. Un producto "light" puede ser ultraprocesado e inferior a un alimento entero natural.',
    evidenceSource: 'Organización Mundial de la Salud (OMS).'
  },
  {
    id: 'azucar-morena-blanca',
    question: '¿El azúcar morena o mascabado es mucho más saludable que el azúcar blanca?',
    isMyth: true,
    category: 'Ingredientes',
    shortVerdict: 'MITO: Tienen casi la misma respuesta glucémica e impacto en el organismo.',
    scientificExplanation: 'El azúcar morena contiene diminutas trazas de melaza y minerales, pero su composición de sacarosa (95%+) e índice glucémico son prácticamente idénticos al azúcar refinada. Ambas deben consumirse de forma muy ocasional.',
    evidenceSource: 'Harvard T.H. Chan School of Public Health.'
  },
  {
    id: 'fruta-de-noche',
    question: '¿Comer frutas por la noche o después de cenar es malo para la digestión?',
    isMyth: true,
    category: 'Mitos Populares',
    shortVerdict: 'MITO: La fruta es saludable a cualquier hora del día.',
    scientificExplanation: 'Las calorías y vitaminas de la fruta son las mismas de día que de noche. Salvo que sufras de reflujo específico con cítricos, consumir una pieza de fruta entera por la noche es una excelente alternativa frente a postres azucarados.',
    evidenceSource: 'Sociedad Española de Nutrición Comunitaria (SENC).'
  },
  {
    id: 'jugos-detox-limpiadores',
    question: '¿El cuerpo necesita jugos "detox" de verduras para purificar las toxinas?',
    isMyth: true,
    category: 'Fisiología',
    shortVerdict: 'MITO: Tu hígado y riñones son los verdaderos sistemas detox naturales.',
    scientificExplanation: 'Ningún jugo milagroso sustituye la función hepática ni renal. Además, al licuar las verduras se destruye la fibra estructural. Es mucho mejor comer las frutas y verduras enteras con toda su fibra.',
    evidenceSource: 'Journal of Human Nutrition and Dietetics.'
  },
  {
    id: 'frutos-secos-engordan',
    question: '¿Los frutos secos producen aumento de peso por su alto contenido calórico?',
    isMyth: false,
    category: 'Alimentos',
    shortVerdict: 'VERDAD: Son calóricos pero no promueven el aumento de peso en porciones normales.',
    scientificExplanation: 'A pesar de su densidad energética, la fibra y paredes celulares de los frutos secos impiden que absorbamos todas sus calorías. Además, su elevado poder saciante reduce la ingesta calórica en comidas posteriores.',
    evidenceSource: 'Estudio PREDIMED (Prevención con Dieta Mediterránea).'
  }
];

export const HEALTHY_TIPS_DATA: HealthyTip[] = [
  {
    id: '5-al-dia',
    title: 'Consume 5 porciones entre frutas y verduras',
    summary: 'Asegura un arcoíris de colores en tu mesa para obtener fitoquímicos protectores.',
    iconName: 'Apple',
    actionPoints: [
      'Añade fruta fresca a tu desayuno diario',
      'Incluye una ensalada cruda en el almuerzo',
      'Ten manzanas o mandarinas a mano como snacks'
    ]
  },
  {
    id: 'agua-diaria',
    title: 'Bebe suficiente agua a lo largo del día',
    summary: 'Calcula tu ingesta ideal y no esperes a sentir sed intensa para hidratarte.',
    iconName: 'Droplet',
    actionPoints: [
      'Lleva una botella reutilizable a donde vayas',
      'Aromatiza con rodajas de pepino o menta',
      'Bebe un vaso de agua al despertar para reactivar tu cuerpo'
    ],
    hasCalculator: true
  },
  {
    id: 'reducir-azucar',
    title: 'Sustituye las bebidas azucaradas',
    summary: 'Los refrescos y jugos envasados son la principal fuente de azúcares libres ocultos.',
    iconName: 'ShieldAlert',
    actionPoints: [
      'Prioriza el agua de grifo o mineral',
      'Prepara té e infusiones frías sin endulzar',
      'Prefiere fruta entera en lugar de jugos colados'
    ]
  },
  {
    id: 'sueño-reparador',
    title: 'Prioriza un descanso nocturno de 7 a 8 horas',
    summary: 'El sueño deficiente altera la grelina y la leptina, aumentando el apetito por ultraprocesados.',
    iconName: 'Moon',
    actionPoints: [
      'Apaga pantallas 1 hora antes de dormir',
      'Mantén tu habitación fresca y oscura',
      'Evita cenas copiosas muy cercanas a la hora de acostarte'
    ]
  },
  {
    id: 'leer-etiquetas',
    title: 'Aprende a revisar la lista de ingredientes',
    summary: 'Si la lista tiene más de 5 ingredientes o nombres impronunciables, evalúa alternativas.',
    iconName: 'FileText',
    actionPoints: [
      'Busca alimentos de 1 solo ingrediente (comida real)',
      'Verifica que el azúcar no esté en los 3 primeros puestos',
      'Evita aceites vegetales refinados de palma o soya'
    ]
  },
  {
    id: 'actividad-fisica',
    title: 'Mantén un movimiento corporal regular',
    summary: 'La nutrición y el ejercicio son aliados inseparables para tu salud metabólica.',
    iconName: 'Activity',
    actionPoints: [
      'Camina al menos 8,000 pasos diariamente',
      'Haz ejercicios de fuerza muscular 2-3 veces a la semana',
      'Usa las escaleras en vez del elevador cuando sea posible'
    ]
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Cesta de Cítricos y Frutas del Bosque',
    category: 'Frutas',
    imageUrl: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=800&q=80',
    description: 'Naranjas, mandarinas y bayas repletas de vitamina C y bioflavonoides.'
  },
  {
    id: 'g2',
    title: 'Huerto Urbano con Verduras Frescas',
    category: 'Verduras',
    imageUrl: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=800&q=80',
    description: 'Hortalizas recién cosechadas de máxima calidad y sabor auténtico.'
  },
  {
    id: 'g3',
    title: 'Plato Mediterráneo Equilibrado',
    category: 'Comidas saludables',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    description: 'Quinoa, vegetales asados, aguacate y aderezo de virgen extra.'
  },
  {
    id: 'g4',
    title: 'Preparación Familiar de Alimentos',
    category: 'Personas cocinando',
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
    description: 'Disfrutar el proceso de cocinar fortalece los vínculos saludables con la comida.'
  },
  {
    id: 'g5',
    title: 'Familia Compartiendo Almuerzo Saludable',
    category: 'Familias compartiendo',
    imageUrl: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80',
    description: 'La mesa compartida promueve hábitos positivos desde la infancia.'
  },
  {
    id: 'g6',
    title: 'Mercado Local de Productos Orgánicos',
    category: 'Mercados frescos',
    imageUrl: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=80',
    description: 'Apoyar el comercio local garantiza alimentos de temporada más sabrosos.'
  }
];
