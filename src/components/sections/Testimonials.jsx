import './testimonials.scss';
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import TestimonialCard from './TestimonialsCard';


const testimonials = [
     {
        id: 1,
        name: 'Chris Sturges',
        role: 'Global Consultant in Media and Entertainment, Vice Chair of Operations ILEA Canada',
        text: "Rao reached out to me after my projects caught his attention. His attitude and approach were exemplary, and his follow up was perfectly timed. I have no doubts that he will always have my best interests in mind as we navigate our contauing business realtionship.",
        avatar: '/images/testimonials/Chris Sturges.jpg',
        rating: 4.8
    },
     {
        id: 2,
        name: 'Qandeel Butt',
        role: 'Technology Consultant @ PureLogics | Leading the AI Revolution: Consulting for Forward-Thinking Organizations',
        text: "Rao is an excellent lead generator, high skilled, and diligent in his work. His dedication and hard work have significantly contributed to our team's success. His ability to manage multiple tasks efficiently and his commitment to achieving targets are truly commendable. Rao is not only a reliable team player but also a future leader in the making. I am confident that Rao will continue to excel in his career and make significant contributions to any team he is part of.",
        avatar: '/images/testimonials/Qandeel Baloch.jpg',
        rating: 4.9
    },
     {
        id: 3,
        name: 'Bilal Javed',
        role: 'Business Development Manager | Tech Sales Consultant | Expertise in Email Marketing & Multi-Channel Lead Generation | Designing Effective ABM | Drip Campaigns & Sales Funnels to Drive Revnue Growth, LinkedIn Specialist',
        text: "I am delighted to recommend Rao Ali Tahir, who has been an exceptional member of my team at PureLogics. Since joining us as a BD Intern, Rao Ali Tahir has consistently demonstrated outstanding skills and dedication, quickly advancing to his role as Associate Business Developer. His pro-active approach, innovative thinking, and excellent problem-solving abilities have greatly contributed to our projects'success.",
        avatar: '/images/testimonials/Bilal Javed.jpg',
        rating: 4.8
    },
    {
        id: 4,
        name: 'Muhammad Adnan Tahseen',
        role: 'Full Stack Web & Desktop .Net Developer',
        text: "Over the years, I’ve had the privilege of working with visionary entrepreneurs, dynamic startups, and established enterprises — seeing them scale smarter, close strategic deals, and turn potential into profit",
        avatar: '/images/testimonials/adnan.png',
        rating: 4.7
    },
    {
        id: 5,
        name: 'Rao Muzammil Naseem',
        role: 'ReactJS Front-End Developer, Freelancer',
        text: "As a Business Developer, his mission is to unlock opportunities and turn ideas into measurable success. But don’t just take my word for it — hear directly from the entrepreneurs, executives, and teams he's partnered with.",
        avatar: '/images/testimonials/client2.png',
        rating: 4.8
    },
    // Add more testimonials
];
const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Handle touch events for mobile swipe
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        if (distance > 50) goToNext(); // Swipe left
        if (distance < -50) goToPrev(); // Swipe right
        setTouchStart(null);
        setTouchEnd(null);
    };

    // Auto-slide logic
    useEffect(() => {
        if (!autoSlide) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
            );
        }, 5000);
        return () => clearInterval(interval);
    }, [autoSlide, testimonials.length]);

    const goToPrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
        setAutoSlide(false);
    };

    const goToNext = () => {
        setCurrentIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
        setAutoSlide(false);
    };
    return (
        <section className="testimonials-section" id="testimonials" data-aos="flip-up">
            <div className="section-header">
                <h2>Testimonials</h2>
                <p>What people say about my work</p>
            </div>

            <div
                className="testimonial-slider"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <button
                    className="slider-arrow left"
                    onClick={goToPrev}
                    aria-label="Previous testimonial"
                >
                    <FaArrowLeft />
                </button>

                <div className="slider-track">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`slide ${index === currentIndex ? 'active' : ''}`}
                            style={{
                                transform: `translateX(${100 * (index - currentIndex)}%)`,
                                opacity: index === currentIndex ? 1 : 0
                            }}
                        >
                            <TestimonialCard testimonial={testimonial} />
                        </div>
                    ))}
                </div>

                <button
                    className="slider-arrow right"
                    onClick={goToNext}
                    aria-label="Next testimonial"
                >
                    <FaArrowRight />
                </button>
            </div>

            <div className="slider-dots">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => {
                            setCurrentIndex(index);
                            setAutoSlide(false);
                        }}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Testimonials