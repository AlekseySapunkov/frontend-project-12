import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {ArrowRightSquare } from 'react-bootstrap-icons';
import { actions } from '../../slices/modalSlice';

const ChannelsTitle = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <div className="d-flex justify-content-between mb-2 ps-4 pe-2">
      <span>
        {t('main.channels')}
      </span>
      <Button
        className="p-0 text-primary btn-group-vertical"
        variant=""
        onClick={() => dispatch(actions.setModalType('adding'))}
      >
        <ArrowRightSquare color="royalblue" width="20" height="20" viewBox="0 0 16 16" />
        <span className="visually-hidden">+</span>
      </Button>
    </div>
  );
};

export default ChannelsTitle;
