import LayoutUser from "components/user/layoutUser/layout";
import UserClassPage from "components/user/myclass/userclasspage";
import React from "react";

const Item = function () {
    // Get params
    return (
        <LayoutUser
            title="MHX 2021 - Tin học hóa"
            desc="ClassPage"
            icon="/icons/mhx-logo.svg"
        >

            <UserClassPage />
        </LayoutUser>
    );
};
export default Item;
