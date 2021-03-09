import React from 'react';
import { TextInput, View, Text } from 'react-native';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, RefinementList } from 'react-instantsearch-dom';

const UselessTextInput = () => {
  const [value, onChangeText] = React.useState('Useless Placeholder');
  const client = algoliasearch('877ZB0U6S6', 'c7ecc011331c6b94211be09dead9bfbb');
  const index = client.initIndex('user');

  const objects = [
    {
      objectID: 1,
      name: 'foo',
    },
  ];

  index
    .search('m')
    .then(({ hits }) => {
      console.log('result', hits);
    })
    .catch(err => {
      console.log(err);
    });
  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <InstantSearch searchClient={client} indexName="instant_search">
        {/* <RefinementList attribute="brand" /> */}
      </InstantSearch>
    </View>
  );
};

export default UselessTextInput;
