export interface WebtoonReview {
  id: number;
  recommendRate: number;
  drawingStyleRate?: number;
  enjoyRate?: number;
  content: string;
  authorId: number;
  authorNickname: string;
  timestamp: Date;
}
