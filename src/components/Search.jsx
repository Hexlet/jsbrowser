/* eslint-disable no-useless-escape */
import { useFormik } from 'formik';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from '../selectors';
import { actions as tabDataActions } from '../slices/tabsData';
import { actions as tabsActions } from '../slices/tabs';

const generateValidUrl = (data) => {
  const pattern = 'https?\:\/\/[a-zA-Z]+\..+'; // has protocol?
  const hasProtocol = new RegExp(pattern);
  const link = data.match(hasProtocol) ? data : `https://yandex.ru/search/?text=${encodeURIComponent(data)}`;
  const url = new URL(`https://allorigins.hexlet.app/get?url=${encodeURIComponent(link)}`);
  return { link, url };
};

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
        const { link, url } = generateValidUrl(values.url);
        const response = await fetch(url);
        const htmlDoc = await response.json();
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlDoc.contents, 'text/html');
        const tabData = {
          tabData: { [activeTabId]: htmlDoc.contents },
          url: link,
          tabId: activeTabId,
        };

        dispatch(tabDataActions.addTabData(tabData));
        dispatch(tabsActions.renameTab({ id: activeTabId, name: doc.title }));
        formik.resetForm();
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
