import React from 'react';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';

const Search = () => {
  const { t } = useTranslation();

  return <Form.Control type="text" placeholder={t('search.placeholder')} />;
};

export default Search;
