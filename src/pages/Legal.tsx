import { motion } from 'motion/react';

export default function Legal() {
  return (
    <div className="w-full overflow-hidden pt-32 pb-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-950 mb-6">
            Legal <br />
            <span className="text-blue-600">Information.</span>
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            Privacy Policy, Terms of Service, and Disclaimers.
          </p>
        </motion.div>

        <div className="space-y-16 text-zinc-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-zinc-950 mb-6">Privacy Policy</h2>
            <p className="mb-4">
              Your privacy is important to us. It is Jaskirat Builds' policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.
            </p>
            <p className="mb-4">
              We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.
            </p>
            <p className="mb-4">
              We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
            </p>
            <p>
              We don't share any personally identifying information publicly or with third-parties, except when required to by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-950 mb-6">Terms of Service</h2>
            <p className="mb-4">
              By accessing the website at Jaskirat Builds, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>
            <p className="mb-4">
              If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
            </p>
            <h3 className="text-lg font-bold text-zinc-950 mt-8 mb-4">Use License</h3>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Jaskirat Builds' website for personal, non-commercial transitory viewing only.
            </p>
            <p>
              This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose, or for any public display (commercial or non-commercial); attempt to decompile or reverse engineer any software contained on Jaskirat Builds' website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or "mirror" the materials on any other server.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-950 mb-6">Disclaimer</h2>
            <p className="mb-4">
              The materials on Jaskirat Builds' website are provided on an 'as is' basis. Jaskirat Builds makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p>
              Further, Jaskirat Builds does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
