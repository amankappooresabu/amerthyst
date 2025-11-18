import { useState, useEffect } from 'react';
import '../styles/Landing.scss';
import { cardData } from '../constants/CardData';

export default function Landing1() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [direction, setDirection] = useState('');

    // Auto-play
    useEffect(() => {
        if (!isDragging && !isTransitioning) {
            const interval = setInterval(() => {
                handleSlideChange('next');
            }, 3500);
            return () => clearInterval(interval);
        }
    }, [isDragging, isTransitioning, currentIndex]);

    const handleSlideChange = (dir: 'next' | 'prev') => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setDirection(dir);
    
    if (dir === 'next') {
        setCurrentIndex((prev) => (prev + 1) % cardData.length);
    } else {
        setCurrentIndex((prev) => (prev - 1 + cardData.length) % cardData.length);
    }
    
    setTimeout(() => {
        setIsTransitioning(false);
        setDirection('');
    }, 600);
};


    // Get visible cards (circular)
    const getVisibleCards = () => {
        const prev = (currentIndex - 1 + cardData.length) % cardData.length;
        const next = (currentIndex + 1) % cardData.length;
        return [
            { index: prev, position: 'left' },
            { index: currentIndex, position: 'center' },
            { index: next, position: 'right' }
        ];
    };

    const handleDragStart = (clientX: number) => {
        if (isTransitioning) return;
        setIsDragging(true);
        setStartX(clientX);
        setDragOffset(0);
    };

    const handleDragMove = (clientX: number) => {
        if (!isDragging || isTransitioning) return;
        const diff = clientX - startX;
        setDragOffset(diff);
    };

    const handleDragEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);
        
        if (Math.abs(dragOffset) > 50) {
            if (dragOffset > 0) {
                handleSlideChange('prev');
            } else {
                handleSlideChange('next');
            }
        }
        setDragOffset(0);
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        handleDragStart(e.clientX);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        handleDragMove(e.clientX);
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        handleDragStart(e.touches[0].clientX);
    };

   const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        handleDragMove(e.touches[0].clientX);
    };

    const visibleCards = getVisibleCards();

    return (
        <div className="landing-container">
            <h1 className="brand-title">Purple Sky Trade</h1>
            
            <div 
                className="glass-cards-container"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleDragEnd}
            >
                <div 
    className={`carousel-track ${isTransitioning ? 'transitioning' : ''} ${direction}`}
>
    {visibleCards.map(({ index, position }) => {
        const card = cardData[index];
        const isCenter = position === 'center';
        
        return (
            <div
                key={`${index}-${position}`}
                className={`glass-card ${isCenter ? 'center' : 'side'} ${position}`}
            >
                <h3 className="card-title">{card.title}</h3>
            </div>
        );
    })}
</div>
            </div>
            
            <div className="gradient-overlay" />
        </div>
    );
}