import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom'; // Import the useParams hook
import IconWrapper from '../components/IconWrapper';
import { IconMail, IconMapPin, IconPhone } from '../components/Icons';

const ContactForm = () => (
    <form action="https://formspree.io/f/xrblqqjj" method="POST" className="space-y-4">
        <div><label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label><input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" /></div>
        <div><label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label><input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" /></div>
        <div><label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label><input type="text" id="subject" name="subject" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" /></div>
        <div><label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label><textarea id="message" name="message" rows="4" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"></textarea></div>
        <div><button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">Send Message</button></div>
    </form>
);

const DealershipForm = () => (
    <form action="https://formspree.io/f/xyzpwway" method="POST" className="space-y-4">
        <div><label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label><input type="text" id="companyName" name="Company Name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" /></div>
        <div><label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">Contact Person</label><input type="text" id="contactPerson" name="Contact Person" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" /></div>
        <div><label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label><input type="tel" id="phone" name="Phone" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" /></div>
        <div><label htmlFor="dealership-email" className="block text-sm font-medium text-gray-700">Email Address</label><input type="email" id="dealership-email" name="Email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" /></div>
        <div><label htmlFor="city" className="block text-sm font-medium text-gray-700">City / State</label><input type="text" id="city" name="City/State" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" /></div>
        <div><label htmlFor="dealership-message" className="block text-sm font-medium text-gray-700">Your Business & Proposal</label><textarea id="dealership-message" name="Business Proposal" rows="4" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea></div>
        <div><button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">Submit Inquiry</button></div>
    </form>
);

const SupportPage = () => {
    // Get the subpage name ('contact' or 'dealership') from the URL
    const { subpage } = useParams();

    const isContact = subpage === 'contact';
    const title = isContact ? "Contact Our Support Team" : "Become a Luxbox Dealer";
    const description = isContact ? "Have a question or need help with a product? We're here for you." : "Partner with us to bring Luxbox quality to your customers. Fill out the form below to get started.";

    return (
        <div className="animate-fade-in pt-32 pb-20 bg-gray-50">
            <Helmet>
                <title>Contact Us | Luxbox Customer Support</title>
                <meta
                    name="description"
                    content="Have a question or need support for your project? Contact the Luxbox team today. We're here to help with all your lighting and electrical needs."
                />
            </Helmet>
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
                    <p className="mt-4 text-lg text-gray-600">{description}</p>
                </div>
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            {isContact ? <ContactForm /> : <DealershipForm />}
                        </div>
                        <div className="flex flex-col justify-start space-y-6 items-start">
                            <h3 className="text-2xl font-bold text-gray-800">Contact Information</h3>
                            <div className="flex items-start gap-4">
                                <IconWrapper icon={IconMapPin} className="bg-blue-100 text-blue-600" />
                                <div>
                                    <h4 className="font-semibold text-gray-700">Our Office</h4>
                                    <p className="text-gray-600">Plot No. 7, 7a, 7b Naya Gher, Jeoni Mandi, Agra, India</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <IconWrapper icon={IconMail} className="bg-blue-100 text-blue-600" />
                                <div>
                                    <h4 className="font-semibold text-gray-700">Email Us</h4>
                                    <p className="text-gray-600">support@luxbox.in</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <IconWrapper icon={IconPhone} className="bg-blue-100 text-blue-600" />
                                <div>
                                    <h4 className="font-semibold text-gray-700">Call Us</h4>
                                    <p className="text-gray-600">+91 87100 17100</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportPage;