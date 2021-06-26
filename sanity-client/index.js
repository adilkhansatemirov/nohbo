import client from '@sanity/client';

export default client({
  projectId: 'etuo4vmp',
  dataset: 'production',
  useCdn: true,
});
