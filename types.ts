
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  feedback: string;
  avatar?: string; // Optional: URL to an avatar image
}

export interface ProductModule {
  id: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface ValueProposition {
  id: number;
  text: string;
  icon?: React.ReactNode;
}