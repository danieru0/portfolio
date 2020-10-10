import i18n from 'i18next';

const t = value => i18n.t(value, {returnObjects: true});

export default t;