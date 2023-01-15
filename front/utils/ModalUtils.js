import AlertModal from "@/components/common/Modals/AlertModal";
import ConfirmModal from "@/components/common/Modals/ConfirmModal";
import ToastPopup from "@/components/common/Modals/ToastPopup";
import ReactDOM from "react-dom/client";

const ModalUtils = () => {};

/**
 * @param {String} top(@default "50%") : top
 * @param {String} left(@default "50%") : left
 * @param {String} minWidth (@default "325px") : 최소 너비
 * @param {String} title(@default "알림") : 제목
 * @param {String} message(@default "메시지") : 메시지
 * @param {String} confirmBtnText(@default "확인") : 확인 버튼 텍스트
 * @param {String} cancleBtnText(@default "취소") : 취소 버튼 텍스트
 * @param {ReactElement} component : 컴포넌트
 * @param {Function} onAfterOpen : 모달이 열린 후 실행 될 함수
 * @param {Function} onAfterClose : 모달이 닫힌 후 실행 될 함수
 * @param {Function} onRequestConfirm : 확인버튼을 누른 후 실행 될 함수
 * @param {Function} onRequestCancle : 취소버튼을 누른 후 실행 될 함수
 */

const defaultProps = {
  isOpen: true,
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  overflow: "hidden",
  minWidth: "325px",
  title: "알림",
  message: "메시지",
  confirmBtnText: "확인",
  cancleBtnText: "취소",
  component: () => {},
  onAfterOpen: () => {},
  onAfterClose: () => {},
  onRequestConfirm: () => {},
  onRequestCancle: () => {},
};

// Alert 모달
ModalUtils.openAlert = (obj) => {
  let props = { ...defaultProps, ...obj };

  const modal = document.getElementById("alert-modal");
  const root = ReactDOM.createRoot(modal);

  const onRequestClose = () => {
    props.isOpen = false;
    root.render(<AlertModal {...props}></AlertModal>);
    setTimeout(() => {
      root.unmount();
    }, 200);
  };

  props.onRequestClose = onRequestClose;
  root.render(<AlertModal {...props}></AlertModal>);
};

// Confirm 모달
ModalUtils.openConfirm = (obj) => {
  let props = { ...defaultProps, ...obj };

  const modal = document.getElementById("confirm-modal");
  const root = ReactDOM.createRoot(modal);

  const onRequestClose = () => {
    props.isOpen = false;
    root.render(<ConfirmModal {...props}></ConfirmModal>);
    setTimeout(() => {
      root.unmount();
    }, 200);
  };

  props.onRequestClose = onRequestClose;
  root.render(<ConfirmModal {...props}></ConfirmModal>);
};

export default ModalUtils;
