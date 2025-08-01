import React from 'react';

// --- This is your list of PDF catalogues ---
// --- Place your PDF files in the 'public/pdfs/' folder ---
const catalogues = [
    {
        name: 'Lighting Solutions Catalogue 2025',
        description: 'Complete collection of all our lighting products.',
        path: '/pdfs/Luxbox Catalogue 2024.pdf'
    }
];

// A simple PDF icon component
const IconPdf = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
);

// A simple clock icon component
const IconClock = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const CataloguePage = () => {
    return (
        <div className="bg-white min-h-screen">
            <div className="container mx-auto px-4 py-32">

                {/* Page Header */}
                <div className="text-center border-b pb-8 mb-12">
                    <h1 className="text-4xl font-bold text-gray-900">Our Catalogues</h1>
                    <p className="mt-4 text-lg text-gray-600">Download our latest product catalogues.</p>
                </div>

                {/* PDF List */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {catalogues.map((catalogue) => (
                        <a
                            key={catalogue.name}
                            href={catalogue.path}
                            target="_blank" // Opens the PDF in a new tab
                            rel="noopener noreferrer"
                            className="group flex items-center p-5 bg-gray-50 rounded-lg border-2 border-gray-200 hover:bg-rose-50 hover:border-rose-200 transition-all duration-200"
                        >
                            <div className="flex-shrink-0">
                                <IconPdf className="w-8 h-8 text-rose-500" />
                            </div>
                            <div className="ml-4 flex-grow">
                                <p className="font-bold text-gray-800">{catalogue.name}</p>
                                <p className="text-sm text-gray-500">{catalogue.description}</p>
                            </div>
                            <div className="ml-4 flex-shrink-0 text-sm font-medium text-gray-500 group-hover:text-rose-600">
                                View PDF
                            </div>
                        </a>
                    ))}
                </div>

                <div className="h-10"></div>

                <div className="max-w-3xl mx-auto space-y-4">

                    {/* --- Replace your old placeholder with this one --- */}
                    <div
                        className="flex items-center p-5 bg-slate-200 rounded-lg border-2 border-gray-300"
                    >
                        <div className="flex-shrink-0">
                            <IconClock className="w-8 h-8 text-black/85" />
                        </div>
                        <div className="ml-4 flex-grow">
                            <p className="font-bold text-black/90">More Catalogues Coming Soon</p>
                            <p className="text-sm text-black/80">Check back later for more updates.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CataloguePage;