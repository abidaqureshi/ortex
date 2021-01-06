import React, { useState, useCallback, useEffect } from 'react';
import { Modal, Button } from 'antd';

import PasswordResetForm from '../PasswordReset';

const ModalForm = ({ isShowModal = false, fnCallBack }) => {
  const [modalProps, setModalProps] = useState({ loading: false, visible: false });
  useEffect(() => {
    if (isShowModal) {
      showModal();
    }
  }, [isShowModal]);

  const showModal = useCallback(() => {
    setModalProps(modalProps => ({ ...modalProps, visible: !modalProps.visible }));
  }, []);

  const handleOk = useCallback(() => {
    setModalProps(modalProps => ({ ...modalProps, loading: true }));
    setTimeout(() => {
      setModalProps({ loading: false, visible: false });
      fnCallBack(false);
    }, 3000);
  }, []);

  const handleCancel = useCallback(() => {
    setModalProps(modalProps => ({ ...modalProps, visible: false }));
    fnCallBack(false);
  }, []);

  const { visible, loading } = modalProps;
  return (
    <>
      <Modal
        visible={visible}
        title='Reset password'
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key='back' onClick={handleCancel}>
            Return
          </Button>,
          <Button key='submit' type='primary' loading={loading} onClick={handleOk}>
            Submit
          </Button>,
        ]}
      >
        <PasswordResetForm />
      </Modal>
    </>
  );
};

export default ModalForm;
