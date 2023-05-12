import React from 'react';
import { FlashCard } from './FlashCard';

export function FlashCardList({ flashcards }) {
    return [
        <div className="card-grid">
            {flashcards.map(flashcard => <FlashCard flashcard={flashcard} key={flashcard.id} />)}
        </div>
    ]
}
