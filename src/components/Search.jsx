import { useFormik } from 'formik';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from '../selectors';
import { actions as tabDataActions } from '../slices/tabsData';

const Search = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'search' });
  const dispatch = useDispatch();
  const activeTabId = useSelector(selectors.activeTabIdSelector);

  const formik = useFormik({
    initialValues: {
      url: '',
    },
    onSubmit: async (values) => {
      try {
        const response = await fetch(values.url);
        const htmlDoc = await response.text();
        const tabData = {
          [activeTabId]: htmlDoc,
        };

        dispatch(tabDataActions.addTabData(tabData));
        formik.values.url = '';
      } catch (err) {
        console.log('something wrong: ', err);
      }
    },
  });

  return (
    <div className="mt-auto px-5 py-3">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="d-flex">
          <Form.Label
            htmlFor="url"
            className="visually-hidden"
          >
            {t('label')}
          </Form.Label>
          <Form.Control
            className="me-2"
            onChange={formik.handleChange}
            value={formik.values.url}
            placeholder={t('placeholder')}
            name="url"
            id="url"
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Search;
