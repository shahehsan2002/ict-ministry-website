import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
      <div className="container mx-auto px-6">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-red-600 mb-8 text-center"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          About Us
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-red-600">Our Vision</h2>
            <p className="text-lg leading-relaxed">
              At the ICT Ministry of Bangladesh, we envision a future where technology bridges gaps and fosters innovation. Our goal is to leverage digital tools to streamline services, enhance accessibility, and empower every citizen. Through strategic initiatives and cutting-edge technology, we aim to build a smarter, more connected Bangladesh.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Our vision extends beyond mere technological advancement. We aspire to create an inclusive digital society where technology serves as a catalyst for social and economic development. By integrating innovative solutions, we strive to ensure that every individual can benefit from the opportunities provided by the digital era.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-red-600">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              Our mission is to drive technological advancements across the country. We are committed to fostering an inclusive digital ecosystem that supports innovation and economic growth. By integrating technology into every sector, we aim to improve public services, enhance governance, and provide equitable opportunities for all.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              We focus on delivering high-impact projects that address critical needs and leverage technology to its fullest potential. From digital literacy programs to e-governance initiatives, our mission is to create lasting value and improve the quality of life for every Bangladeshi citizen.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-red-600">Our Achievements</h2>
            <p className="text-lg leading-relaxed">
              Over the years, we have successfully launched numerous projects that have significantly improved the digital landscape of Bangladesh. From implementing e-governance solutions to expanding digital literacy programs, our initiatives have set new benchmarks in technological excellence and citizen engagement.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Key achievements include the development of a nationwide digital infrastructure, the launch of an integrated citizen portal, and the implementation of various ICT training programs. Our efforts have been recognized both nationally and internationally, reinforcing our commitment to driving digital transformation.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-red-600">Our Team</h2>
            <p className="text-lg leading-relaxed">
              Our team comprises dedicated professionals who are passionate about leveraging technology for public good. With diverse expertise in IT, project management, and policy development, we work collaboratively to achieve our mission and vision. Our team’s commitment and innovation drive our success and make us a leader in the digital space.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Each member of our team brings a unique set of skills and experiences that contribute to our collective success. From seasoned IT professionals to forward-thinking policy makers, our team is united by a common goal: to use technology to enhance the lives of our citizens and build a brighter future for Bangladesh.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ duration: 1, delay: 1 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-red-600">Contact Us</h2>
            <p className="text-lg leading-relaxed">
              We value your feedback and are always here to assist you. Whether you have questions, suggestions, or need support, feel free to get in touch with us.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Email: <a href="mailto:support@ict.gov.bd" className="text-blue-600 hover:underline">support@ict.gov.bd</a><br />
              Phone: +880 123 456 789<br />
              Address: ICT Ministry, Bangladesh Secretariat, Dhaka
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
