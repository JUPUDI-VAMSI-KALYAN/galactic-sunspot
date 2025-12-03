export function Disclaimer() {
    return (
        <section className="bg-black py-12 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-3">
                        <h3 className="text-gray-400 text-sm font-medium">Disclaimers</h3>
                    </div>
                    <div className="md:col-span-9 space-y-6 text-[10px] leading-relaxed text-gray-400">
                        <p>
                            Begin is not a bank. Banking services are provided by our partner banks, Members FDIC. The Begin Visa® Debit Card is issued by our partner banks pursuant to a license from Visa U.S.A. Inc. and may be used everywhere Visa debit cards are accepted.
                        </p>
                        <p>
                            Begin is an information platform and not a law firm. We do not provide legal advice. For legal advice specific to your immigration case, please consult with a licensed independent immigration attorney. Use of this platform does not create an attorney-client relationship. Information shared with Begin may not be covered by the attorney-client privilege. The information provided is for general guidance only and may not reflect the most current legal developments. Individual results may vary based on specific circumstances. Users are responsible for verifying all information and meeting application deadlines. Begin is not liable for any decisions made based on information provided through this platform. Begin is not affiliated with or endorsed by USCIS, DHS, or any government agency.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
