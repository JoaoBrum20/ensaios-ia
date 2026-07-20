export const whatsappBase = "https://wa.me/5522992751432";

export function whatsappUrl(message: string) {
  return `${whatsappBase}?text=${encodeURIComponent(message)}`;
}

export const whatsappDefaultMessage =
  "Olá! Quero criar meu ensaio fotográfico com IA. Pode me explicar como funciona?";

export const whatsappLink = whatsappUrl(whatsappDefaultMessage);

export type PortfolioStyle = {
  id: string;
  label: string;
  cover: string;
  coverAlt: string;
  className?: string;
  description: string;
  images: { src: string; alt: string }[];
  whatsappMessage: string;
};

const U = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const portfolioStyles: PortfolioStyle[] = [
  {
    id: "aniversario",
    label: "Aniversário",
    cover:
      "https://otjwjkrbbzmrsgvhcpkj.supabase.co/storage/v1/object/public/Fotos%20Ensaio%20IA/aniversario/ANIV%20(2).png",
    coverAlt: "Ensaio de aniversário com IA — retrato editorial",
    className: "portfolio-main",
    description:
      "Cenários sofisticados, roupa combinando com a data e direção de luz cinematográfica para eternizar seu momento.",
    images: [
      { src: "https://otjwjkrbbzmrsgvhcpkj.supabase.co/storage/v1/object/public/Fotos%20Ensaio%20IA/aniversario/ANIV%20(2).png", alt: "Ensaio de aniversário 1" },
      { src: "https://otjwjkrbbzmrsgvhcpkj.supabase.co/storage/v1/object/public/Fotos%20Ensaio%20IA/aniversario/ANIV%20(3).png", alt: "Ensaio de aniversário 2" },
      { src: "https://otjwjkrbbzmrsgvhcpkj.supabase.co/storage/v1/object/public/Fotos%20Ensaio%20IA/aniversario/aniv%204.png", alt: "Ensaio de aniversário 3" },
      { src: "https://otjwjkrbbzmrsgvhcpkj.supabase.co/storage/v1/object/public/Fotos%20Ensaio%20IA/aniversario/aniv%205.png", alt: "Ensaio de aniversário 4" },
    ],
    whatsappMessage: "Olá! Gostei do ensaio de Aniversário e quero criar o meu.",
  },
  {
    id: "profissional",
    label: "Profissional",
    cover: U("photo-1560250097-0b93528c311a"),
    coverAlt: "Retrato corporativo masculino em escritório sofisticado",
    description:
      "Retratos corporativos com iluminação cuidadosa, ambiente executivo e postura pensada para LinkedIn e branding pessoal.",
    images: [
      { src: U("photo-1560250097-0b93528c311a"), alt: "Ensaio profissional 1" },
      { src: U("photo-1573497019940-1c28c88b4f3e"), alt: "Ensaio profissional 2" },
      { src: U("photo-1519085360753-af0119f7cbe7"), alt: "Ensaio profissional 3" },
      { src: U("photo-1472099645785-5658abf4ff4e"), alt: "Ensaio profissional 4" },
    ],
    whatsappMessage: "Olá! Gostei do ensaio Profissional e quero criar o meu.",
  },
  {
    id: "infantil",
    label: "Infantil",
    cover: U("photo-1503454537195-1dcabb73ffb9"),
    coverAlt: "Ensaio infantil Fine Art em cenário claro",
    description:
      "Ensaios Fine Art com cenários lúdicos, paleta suave e a delicadeza da infância em cada enquadramento.",
    images: [
      { src: U("photo-1503454537195-1dcabb73ffb9"), alt: "Ensaio infantil 1" },
      { src: U("photo-1519689680058-324335c77eba"), alt: "Ensaio infantil 2" },
      { src: U("photo-1596464716127-f2a82984de30"), alt: "Ensaio infantil 3" },
      { src: U("photo-1519340241574-2cec6aef0c01"), alt: "Ensaio infantil 4" },
    ],
    whatsappMessage: "Olá! Gostei do ensaio Infantil e quero criar o meu.",
  },
];

export const heroImage = U("photo-1524504388940-b1c1722653e1");

export const packages = [
  {
    name: "Essencial",
    amount: "1 foto",
    price: "9,90",
    description: "Para transformar uma ideia especial em uma foto inesquecível.",
    featured: false,
  },
  {
    name: "Mini Ensaio",
    amount: "3 fotos",
    price: "14,90",
    description: "Uma pequena sequência com cenário, roupa e poses combinando.",
    featured: false,
  },
  {
    name: "Ensaio Completo",
    amount: "5 fotos",
    price: "19,90",
    description: "Mais variedade para postar, presentear e guardar.",
    featured: true,
  },
  {
    name: "Coleção",
    amount: "10 fotos",
    price: "30,00",
    description: "Uma experiência completa, com mais looks, poses e enquadramentos.",
    featured: false,
  },
];

export const faqs = [
  {
    question: "Como funciona o ensaio com IA?",
    answer:
      "Você envia algumas fotos suas, escolhe o estilo do ensaio e conta o que imagina. A partir disso, criamos imagens personalizadas com cenário, roupa, iluminação e poses alinhadas à sua ideia.",
  },
  {
    question: "Que tipo de foto preciso enviar?",
    answer:
      "Fotos nítidas, sem filtros pesados e com o rosto bem iluminado ajudam a preservar melhor sua identidade. Depois do pedido, você recebe orientações simples para escolher as melhores referências.",
  },
  {
    question: "Posso escolher roupa, cenário e poses?",
    answer:
      "Sim. Você pode enviar referências ou deixar a direção criativa por nossa conta. Aniversário, corporativo, casal, infantil, gestante e editorial são algumas das possibilidades.",
  },
  {
    question: "Qual é o prazo de entrega?",
    answer:
      "O prazo normal é de até 12 horas após a confirmação do pagamento. Quando disponível, a entrega expressa em até 2 horas pode ser adicionada por R$ 10.",
  },
  {
    question: "Minhas fotos ficam protegidas?",
    answer:
      "Suas imagens são usadas somente para criar o ensaio solicitado e não são publicadas sem sua autorização. Você também pode pedir a exclusão dos arquivos após a entrega.",
  },
];