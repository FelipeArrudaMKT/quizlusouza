
export interface Option {
  id: string;
  text: string;
  weight?: number;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
  imageHint: string;
  category: 'pain' | 'opportunity' | 'exclusivity' | 'qualification';
}

export interface QuizState {
  currentStep: number;
  answers: Record<number, string>;
  isFinished: boolean;
  score: number;
}
