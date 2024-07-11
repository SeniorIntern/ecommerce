const AcknowledgementBanner = () => {
  return (
    <div className="flex h-40 overflow-hidden rounded-md border border-gray-200 bg-white">
      <div className="h-full w-96 bg-orange-400"></div>
      <div className="grow p-10">
        <p>
          The Modern Furn respectfully acknowledges the traditional owners of
          the land on which we conduct our business. We recognize their
          continuing connection to land, water, and community. We pay our
          respects to Elders past, present, and emerging, and pay our respect to
          all Aboriginal and Torres Strait Islander peoples.
        </p>
      </div>
    </div>
  );
};

export default AcknowledgementBanner;
