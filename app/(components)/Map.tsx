
const MapEmbed: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center my-8">
        <div className="border cont-block border-gray-300 shadow-lg rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6807.140414014626!2d73.09766389871247!3d31.45349716309013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1723898736279!5m2!1sen!2s"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-96 md:h-[450px]"
          />
        </div>
      </div>
    </>
  );
};

export default MapEmbed;
