import React from "react";

import Flags from "./components/Flags";
import { H2 } from "../../../../Components/Typography";

import { Container, FlexBetween } from "../../../../Global/components";
import styled from "styled-components";

//image
import emiratesFlag from "../../../../Assets/image/main/flags/emirates.png";
import australiaFlag from "../../../../Assets/image/main/flags/australia.png";
import unitedStateFlag from "../../../../Assets/image/main/flags/unitedState.png";
import russiaFlag from "../../../../Assets/image/main/flags/russia.png";
import italyFlag from "../../../../Assets/image/main/flags/italy.png";
import denmark from "../../../../Assets/image/main/flags/denemark.png";
import franceFlag from "../../../../Assets/image/main/flags/france.png";
import chinaFlag from "../../../../Assets/image/main/flags/china.png";
import britainFlag from "../../../../Assets/image/main/flags/British.png";

const FlagsWrapper = styled(FlexBetween)`
  padding: 40px 0;
`;
const Div = styled.div`
  @media (max-width: 920px) {
    display: none;
  }
`;
export default function Supplier() {
  return (
    <Div>
      <Container>
        <H2 title="Suppliers by region" />

        <FlagsWrapper>
          <div>
            <Flags
              title="Arabic Emirates"
              website="shopname.ae"
              img={emiratesFlag}
            />
            <Flags title="Denmark" website="denmark.com.dk" img={denmark} />
          </div>
          <div>
            <Flags
              title="Australia"
              website="shopname.ae"
              img={australiaFlag}
            />
            <Flags title="France" website="shopname.com.fr" img={franceFlag} />
          </div>
          <div>
            <Flags
              title="United States"
              website="shopname.ae"
              img={unitedStateFlag}
            />
            <Flags
              title="Arabic Emirates"
              website="shopname.ae"
              img={emiratesFlag}
            />
          </div>
          <div>
            <Flags title="Russia" website="shopname.ru" img={russiaFlag} />
            <Flags title="China" website="shopname.ae" img={chinaFlag} />
          </div>
          <div>
            <Flags title="Italy" website="shopname.it" img={italyFlag} />
            <Flags
              title="Great Britain"
              website="shopname.co.uk"
              img={britainFlag}
            />
          </div>
        </FlagsWrapper>
      </Container>
    </Div>
  );
}
