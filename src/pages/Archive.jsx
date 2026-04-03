import React from 'react';
import { motion } from 'framer-motion';
import { Search, Database, Download } from 'lucide-react';

const archiveItems = [
    { year: '2023', code: 'IT-01/S', name: 'TITANIUM_SHELL', type: 'OUTERWEAR', status: 'DEPRECATED' },
    { year: '2023', code: 'IT-02/P', name: 'KINETIC_PANTS', type: 'BOTTOMS', status: 'OUT_OF_STOCK' },
    { year: '2024', code: 'IT-03/H', name: 'THERMAL_HOODIE', type: 'MID_LAYER', status: 'ARCHIVED' },
    { year: '2024', code: 'IT-04/A', name: 'MODULAR_PACK', type: 'ACCESSORIES', status: 'ARCHIVED' },
    { year: '2024', code: 'IT-05/T', name: 'GRAPHENE_TEE', type: 'BASS_LAYER', status: 'ARCHIVED' },
];

const Archive = () => {
    return (
        <div className="min-h-screen bg-primary pt-32 pb-20 px-4 md:px-6">
            <div className="container mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-8 border-b-2 border-secondary pb-12">
                    <div className="space-y-4">
                        <span className="text-[10px] font-mono tracking-[0.4em] text-accent uppercase flex items-center gap-2">
                            <Database size={12} /> SYSTEM_ARCHIVE — READ_ONLY
                        </span>
                        <h1 className="text-6xl md:text-9xl font-heading leading-none tracking-tighter uppercase">THE_VAULT</h1>
                    </div>
                    <div className="relative w-full md:w-80 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary opacity-30 group-focus-within:opacity-100 transition-opacity" size={18} />
                        <input 
                            type="text" 
                            placeholder="SEARCH_DATABASE..."
                            className="w-full bg-transparent border border-secondary/10 p-4 pl-12 focus:border-secondary outline-none transition-all font-mono text-[10px] tracking-widest uppercase"
                        />
                    </div>
                </div>

                {/* Table View */}
                <div className="overflow-x-auto mb-24 md:mb-40 -mx-4 px-4 md:mx-0 md:px-0">
                    <table className="w-full border-collapse min-w-[700px] md:min-w-[800px]">
                        <thead>
                            <tr className="border-b border-secondary/20">
                                <th className="text-left py-4 md:py-6 text-[8px] md:text-[10px] font-mono tracking-[0.3em] text-accent uppercase">RELEASE_YEAR</th>
                                <th className="text-left py-4 md:py-6 text-[8px] md:text-[10px] font-mono tracking-[0.3em] text-accent uppercase">SERIAL_CODE</th>
                                <th className="text-left py-4 md:py-6 text-[8px] md:text-[10px] font-mono tracking-[0.3em] text-accent uppercase">ARTIFACT_NAME</th>
                                <th className="text-left py-4 md:py-6 text-[8px] md:text-[10px] font-mono tracking-[0.3em] text-accent uppercase">CLASSIFICATION</th>
                                <th className="text-right py-4 md:py-6 text-[8px] md:text-[10px] font-mono tracking-[0.3em] text-accent uppercase">SYSTEM_STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {archiveItems.map((item, i) => (
                                <motion.tr 
                                    key={item.code}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="group hover:bg-secondary/5 transition-colors border-b border-secondary/5"
                                >
                                    <td className="py-6 md:py-8 font-heading text-xl md:text-2xl">{item.year}</td>
                                    <td className="py-6 md:py-8 font-mono text-[8px] md:text-[10px] tracking-widest opacity-60">{item.code}</td>
                                    <td className="py-6 md:py-8 font-heading text-xl md:text-2xl tracking-tight group-hover:pl-4 transition-all duration-300">
                                        {item.name}
                                    </td>
                                    <td className="py-6 md:py-8 font-mono text-[8px] md:text-[10px] tracking-widest opacity-60">{item.type}</td>
                                    <td className="py-6 md:py-8 text-right">
                                        <span className={`px-2 md:px-3 py-1 text-[7px] md:text-[8px] font-mono tracking-widest uppercase border ${
                                            item.status === 'ARCHIVED' ? 'border-secondary/20 text-secondary/40' : 'border-secondary text-secondary'
                                        }`}>
                                            {item.status}
                                        </span>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Grid Section */}
                <div className="space-y-8 md:space-y-12">
                    <div className="flex items-center gap-4">
                        <h3 className="text-2xl md:text-4xl font-heading tracking-tight uppercase">RESTRICTED_ACCESS_LOGS</h3>
                        <div className="flex-grow h-[1px] bg-secondary/10" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 text-secondary">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="brutalist-card p-2 bg-secondary/5 group cursor-pointer relative overflow-hidden">
                                <div className="aspect-[4/3] bg-primary overflow-hidden relative">
                                    <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-100 transition-all duration-700">
                                         <Download size={32} md:size={48} />
                                    </div>
                                    <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-secondary text-primary px-2 py-1 text-[8px] font-mono tracking-widest uppercase">
                                        RESTRICTED_DATA
                                    </div>
                                </div>
                                <div className="p-4 border-t border-secondary/10">
                                    <h4 className="text-xl md:text-2xl font-heading mb-1 uppercase">ARCHIVED_UNIT_0{i}</h4>
                                    <p className="text-[9px] md:text-[10px] font-mono tracking-widest text-accent uppercase">TECHNICAL_SPEC_V{i}.pdf</p>
                                </div>
                                <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-center justify-center pointer-events-none group-hover:pointer-events-auto">
                                     <span className="text-primary font-heading text-2xl md:text-3xl">DOWNLOAD_DATA</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Archive;
