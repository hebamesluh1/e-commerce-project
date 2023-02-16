import React from "react";

//style
import {OffersSectionBox,Flex,SectionDetails,SectionDescriptionP,OffersBox,SectionNameH3} from './style';
import {Container} from "../../../../Global/components";


//component
import OfferCard from "./components/OfferCard";
import TimerSection from "./components/TimerSection";


//images
import O1 from "../../../../Assets/image/main/offers/03.png";
import O2 from "../../../../Assets/image/main/offers/04.png";
import O3 from "../../../../Assets/image/main/offers/05.png";
import O4 from "../../../../Assets/image/main/offers/06.png";
import O5 from "../../../../Assets/image/main/offers/08.png";



    export default function Offers() {
    return (
        <Container>
        <OffersSectionBox>
            <Flex>
            <SectionDetails>
                <SectionNameH3>Deals and offers</SectionNameH3>
                <SectionDescriptionP>Hygiene equipments</SectionDescriptionP>
                <TimerSection />
            </SectionDetails>


            <OffersBox>
                <OfferCard img={O1} product="Smart watches" discount="25%" />
                <OfferCard img={O2} product="Laptops " discount="15%" />
                <OfferCard img={O3} product="GoPro cameras " discount="40%" />
                <OfferCard img={O4} product="Headphones" discount="25%" />
                <OfferCard img={O5} product="Canon camreras" discount="25%" />
            </OffersBox>
            </Flex>
            
        </OffersSectionBox>
    </Container>
);
}