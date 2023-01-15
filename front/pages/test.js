import MediumButton from "@/components/common/Buttons/MediumButton";
import CommonLayout from "@/layouts/CommonLayout";
import AxiosUtils from "@/utils/AxiosUtils";
import ModalUtils from "@/utils/ModalUtils";
import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";

function Test() {
  return (
    <Wrapper>
      <ButtonContainer>
        <MediumButton onClick={() => ModalUtils.openAlert()}>
          AlertModal
        </MediumButton>
        <MediumButton onClick={() => ModalUtils.openConfirm()}>
          ConfirmModal
        </MediumButton>
        {/* <MediumButton onClick={() => ModalUtils.openToastPopup()}>
          ToastPopup
        </MediumButton> */}
      </ButtonContainer>
    </Wrapper>
  );
}

export default Test;

Test.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const ButtonContainer = styled.div`
  margin: 100px 0px;
  display: flex;
  gap: 8px;
`;
