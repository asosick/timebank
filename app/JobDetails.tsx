import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface JobDetailsProps {
  route: {
    params: {
      job: {
        id: string;
        title: string;
        company: string;
        description: string;
      };
    };
  };
}

const JobDetails: React.FC<JobDetailsProps> = ({ route }) => {
  // const { job } = route.params;

  return (
    <View style={styles.container}>
    
      <Text style={styles.title}>a</Text>
      <Text style={styles.company}>b</Text>
      <Text style={styles.description}>c</Text>
      {/* <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.company}>{job.company}</Text>
      <Text style={styles.description}>{job.description}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  company: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
});

export default JobDetails;
