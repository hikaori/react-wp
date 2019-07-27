import React, { Component, Fragment } from 'react';
import { ServiceBox } from '../../';

interface OwnProps {
  servicesData: [
    {
      service_category: [number];
      acf: {
        serviceTitle: string;
        serviceText: string;
        serviceImg: {
          url: string;
        };
        serviceButtonText: string;
        serviceButtonUrl: string;
        service_order: string;
      };
    }
  ];
  categoryNum: number;
}
interface OwnState {}

class CreateServiceDom extends Component<OwnProps, OwnState> {
  render() {
    let targetServicesData = this.props.servicesData.filter(x =>
      x.service_category.includes(this.props.categoryNum),
    );
    let orderedTrgetServicesData = targetServicesData.sort(function(a, b) {
      return Number(a.acf.service_order) < Number(b.acf.service_order) ? -1 : 1;
    });

    return (
      <Fragment>
        {orderedTrgetServicesData.map((x, index) => (
          <ServiceBox
            key={index}
            title={x.acf.serviceTitle}
            img={x.acf.serviceImg.url}
            imgAlt={x.acf.serviceTitle}
            buttonText={x.acf.serviceButtonText}
            link={x.acf.serviceButtonUrl}
          >
            <div dangerouslySetInnerHTML={{ __html: x.acf.serviceText }} />
          </ServiceBox>
        ))}
      </Fragment>
    );
  }
}
export default CreateServiceDom;
