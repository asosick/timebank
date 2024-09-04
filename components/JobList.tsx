import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Ionicons from '@expo/vector-icons/Ionicons';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';



import React, { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import JobCard from './JobCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

interface Job {
  id: string;
  title: string;
  company: string;
  description: string;
}

const jobsData: Job[] = [
  { id: '1', title: 'Volunteer Teacher', company: 'Local School', description: 'Teach kids math.' },
  { id: '2', title: 'Animal Shelter Volunteer', company: 'Animal Care', description: 'Help take care of animals.' },
  { id: '3', title: 'Event Coordinator', company: 'Community Center', description: 'Organize community events.' },
];

const JobList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const filteredJobs = jobsData.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePress = (job: Job) => {
    navigation.navigate('JobDetails', { job });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for jobs..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredJobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <JobCard job={item} onPress={() => handlePress(item)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
});

export default JobList;