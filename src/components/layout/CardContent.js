import React, { Fragment } from 'react';

/* 
  Card contents to display the data dynamically inside the Home card container
    * Header & information
    * Price / Date
    * Section 1 & 2:
      * Header
      * Price or Number
      * Link
    * Footer:
      * Button
      * Link
*/

const CardContent = props => {
  const { content, width } = props;

  const headingCurrency = content.heading.currency
    ? content.heading.currency.toFixed(2)
    : null;
  return (
    <div
      className="dls-gray-02-bg pad flex justify-content-center"
      style={{ width: width, margin: '5px' }}
    >
      <div className="card text-align-center" style={{ minHeight: '500px' }}>
        {content.borderTop ? (
          <div className="accent-bar dls-cobrand-default-bg " />
        ) : null}
        <div className="pad-responsive-lr pad-3-t pad-b">
          <h2 className="label-2 dls-gray-05 margin-b flex align-items-center justify-content-center">
            {content.heading.heading}
            <div className="tooltip-container" style={{ marginLeft: '5px' }}>
              <button
                data-attach-tooltip
                aria-labelledby="info-1-card"
                className="btn-tooltip glyph glyph-lg"
              />
            </div>
          </h2>
          {headingCurrency ? (
            <h2 className="heading-6">
              ${Math.trunc(headingCurrency)}
              <sup>.{headingCurrency.toString().split('.')[1]}</sup>
            </h2>
          ) : (
            <h2 className="heading-6">{content.heading.date}</h2>
          )}
        </div>
        <hr />
        <div className="pad pad-responsive-lr" style={{ minHeight: '100px' }}>
          <h2 className="label-2 dls-gray-05  flex align-items-center justify-content-center">
            {content.mid.heading}
            {content.mid.info ? (
              <div
                className="tooltip-container"
                data-toggle="tooltip"
                style={{ marginLeft: '5px' }}
              >
                <button
                  data-attach-tooltip
                  aria-labelledby="info-2-card"
                  className="btn-tooltip glyph glyph-lg"
                />
              </div>
            ) : null}
          </h2>
          {content.mid.currency ? (
            <p className="body-1">
              ${content.mid.currency.toFixed(2)}
              {content.mid.link ? (
                <p style={{ color: content.color, marginLeft: '5px' }}>
                  {content.mid.link}
                </p>
              ) : null}
            </p>
          ) : (
            <p className="body-1">{content.mid.text}</p>
          )}
        </div>
        {content.second.heading ? (
          <Fragment>
            <hr />
            <div
              className="pad pad-responsive-lr"
              style={{ minHeight: '100px' }}
            >
              <h2 className="label-2 dls-gray-05 flex align-items-center justify-content-center">
                {content.second.heading}
                {content.second.info ? (
                  <div
                    className="tooltip-container"
                    data-toggle="tooltip"
                    style={{ marginLeft: '5px' }}
                  >
                    <button
                      data-attach-tooltip
                      aria-labelledby="info-3-card"
                      className="btn-tooltip glyph glyph-lg"
                    />
                  </div>
                ) : null}
              </h2>
              {content.second.currency ? (
                <p className="body-1">
                  ${content.second.currency.toFixed(2)}
                  {content.second.link ? (
                    <p style={{ color: content.color, marginLeft: '5px' }}>
                      {content.second.link}
                    </p>
                  ) : null}
                </p>
              ) : (
                <p className="body-1">{content.mid.text}</p>
              )}
            </div>
            <hr />
          </Fragment>
        ) : (
          <div
            className="pad pad-responsive-lr"
            style={{ minHeight: '100px' }}
          />
        )}

        <div className="pad-responsive">
          <p
            className="btn btn-block margin-auto-lr"
            style={{ background: content.color }}
          >
            {content.footer.button}
          </p>

          {content.footer.link ? (
            <div className="pad-responsive">
              <p className="margin-auto-lr" style={{ color: content.color }}>
                {content.footer.link}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CardContent;
