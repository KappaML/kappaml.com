import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ features }) => (

  <div className="mt-10">
    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
      {features.map((item) => (
        <div key={item.name} className="relative">
          <dt>
            <div className="absolute flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary">
              <PreviewCompatibleImage imageInfo={item} />
            </div>
            <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{item.name}</p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">{item.text}</dd>
        </div>
      ))}
    </dl>
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
