import React, { Fragment } from 'react';
//CSS
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const CardContent = props => {
  const { content, width } = props;
  return (
    <Card
      style={{ width: width, height: '500px', borderTop: content.borderTop }}
      className="m-3"
    >
      <ListGroup variant="flush" className="d-flex justify-content-center">
        <ListGroup.Item
          className="d-flex justify-content-center flex-wrap"
          style={{ height: '150px' }}
        >
          <p className="d-flex justify-content-center align-items-center">
            {content.heading.heading}
            <i className="fas fa-info-circle ml-2" />
          </p>
          {content.heading.currency !== null ? (
            <p className="d-flex justify-content-center align-items-center">
              $
              {content.heading.currency.toLocaleString(undefined, {
                minimumFractionDigits: 2
              })}
            </p>
          ) : (
            <p className="d-flex justify-content-center align-items-center">
              {content.heading.date}
            </p>
          )}
        </ListGroup.Item>

        <ListGroup.Item
          style={{ height: '100px' }}
          className="d-flex justify-content-center flex-wrap"
        >
          <p className="d-flex justify-content-center align-items-center">
            {content.mid.heading}
            {content.mid.info ? (
              <i className="fas fa-info-circle ml-2" />
            ) : null}
          </p>
          <p className="d-flex justify-content-center align-items-center">
            {content.mid.currency !== null ? (
              <span>
                $
                {content.mid.currency.toLocaleString(undefined, {
                  minimumFractionDigits: 2
                })}
              </span>
            ) : (
              content.mid.text
            )}
            {content.mid.link !== null ? (
              <span className="ml-2" style={{ color: content.color }}>
                {content.mid.link}
              </span>
            ) : null}
          </p>
        </ListGroup.Item>
        {content.second.heading !== null ? (
          <ListGroup.Item
            style={{ height: '100px' }}
            className="d-flex justify-content-center flex-wrap"
          >
            <p className="d-flex justify-content-center align-items-center">
              {content.second.heading}
              {content.second.info ? (
                <i className="fas fa-info-circle ml-2" />
              ) : null}
            </p>
            <p className="d-flex justify-content-center align-items-center">
              {content.second.currency !== null ? (
                <span>
                  $
                  {content.second.currency.toLocaleString(undefined, {
                    minimumFractionDigits: 2
                  })}
                </span>
              ) : (
                content.second.text
              )}
              {content.second.link !== null ? content.second.link : null}
            </p>
          </ListGroup.Item>
        ) : (
          <div style={{ height: '100px' }} />
        )}

        <ListGroup.Item
          style={{ height: '150px' }}
          className="d-flex justify-content-center flex-wrap "
        >
          <p className="d-flex justify-content-center align-items-center">
            <Button style={{ background: content.color }}>
              {content.footer.button}
            </Button>
          </p>
          <p className="d-flex justify-content-center align-items-center">
            {content.footer.link !== null ? (
              <span style={{ color: content.color }}>
                {content.footer.link}
              </span>
            ) : null}
          </p>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default CardContent;
