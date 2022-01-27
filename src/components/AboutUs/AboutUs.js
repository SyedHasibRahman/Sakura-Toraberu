import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const AboutUs = () => {
    return (
        <div>
            <Header />
            <h1 className="mt-5" >This is About Us</h1>
            <hr className="border border-success" />
            <hr className="border border-success" />
            <div className="container mt-5 ">
                <div className="row ">
                    <div className="col-md-6 col-12" >
                        <img className="img-fluid " src="https://i.ibb.co/mJnKrXN/6.jpg" alt="" />
                    </div>
                    <div className="col-md-6 col-12 py-5">
                        <h4 className="text-start lh-1 py-3">Welcome to the Our Sakura Toraberu </h4>
                        <p className="text-start lh-1">Life with a newborn can be magical — and also overwhelming, exhausting and terrifying. I still remember the day I brought my son home from the hospital and thought: How do I care for this tiny, needy creature? Where is his owner’s manual? But hard as being a new parent can be, you’re probably going to do fine. “Babies are a lot stronger than parents may give them credit for,” said Dr. Jennifer Shu, M.D., an Atlanta-based pediatrician and co-author of “Heading Home With Your Newborn: From Birth to Reality.” (I remember our week-old son rolling off a couch once and thinking we had broken him. He was fine.) Over time, too, parents learn to detect and understand their baby’s needs, desires and schedules. Caring for a newborn — a baby under 28 days old — is not easy, but it does become more manageable, especially with the right advice on hand. For this newborn guide, I spoke with three pediatricians and a certified pediatric sleep consultant, collecting tips on what parents should pay attention to, what kinds of schedules they should follow, what they should do and what they don’t need to worry about. If a mom is breastfeeding — the American Academy of Pediatrics recommends doing so for at least six months — her body will usually start producing breast milk within three days of birth. Before that, her breasts will produce a thick, yellow nutrient-filled liquid called colostrum.

                            At first, a nursing mother might have to work to ensure that her baby correctly latches, or fastens onto her breast, in order to eat. If you’re having trouble establishing a good latch or getting your baby to eat, talk to a certified lactation consultant; most hospitals and birthing centers have at least one on staff. </p>

                        <h4 className="text-start lh-1 py-3">Mission</h4>

                        <p className="text-start lh-1">Whether you’re breastfeeding or using formula, feed your baby frequently.</p>


                        <h4 className="text-start lh-1 py-3">Vision</h4>

                        <p className="text-start lh-1">Our vision is to become one of the admirable organisation in this world in spreading the values of love, honesty, fun and happiness through our baby Care.Our aim is to promote heart-based  baby Care for every one all over the world.</p>
                    </div>
                </div>
            </div>
            <hr className="border border-success" />
            <hr className="border border-success" />
            <Footer />
        </div >
    );
};

export default AboutUs;