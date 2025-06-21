import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';

type OnboardingScreenProps = {
  onComplete: () => void
  onSkip?: () => void
}

const { width, height } = Dimensions.get('window');

const OnboardingScreen = ({ onComplete, onSkip }: OnboardingScreenProps) => {
  const [currentPage, setCurrentPage] = useState(0);

  const onboardingData = [
    {
      title: 'Bem-vindo ao NewsFlow',
      subtitle: 'Aqui a informação encontra o seu ritmo.\nDescubra, compartilhe e se conecte com as\nnotícias que realmente importam pra você',
      illustration: 'welcome',
      buttonText: 'Continuar'
    },
    {
      title: 'Podcasts e categorias\npersonalizadas',
      subtitle: 'Leitura ou áudio? Você escolhe.\nCom categorias personalizadas e podcasts\nexclusivos, o NewsFlow fala a sua língua.',
      illustration: 'podcasts',
      buttonText: 'Continuar'
    },
    {
      title: 'Uma comunidade que\npensa junto',
      subtitle: 'Comente, debate, curta e troque ideias com\npessoas que acompanham os mesmos temas\nque você. Aqui, notícia vira conversa.',
      illustration: 'community',
      buttonText: 'Continuar'
    },
    {
      title: 'Fique por dentro do que\ntá rolando',
      subtitle: 'Receba atualizações sobre eventos, coberturas\nespeciais e lives nas suas categorias favoritas.',
      illustration: 'updates',
      buttonText: 'Começar'
    }
  ];

  const handleNext = () => {
    if (currentPage < onboardingData.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      onComplete && onComplete();
    }
  };

  const handleSkip = () => {
    onSkip && onSkip();
  };

  const renderIllustration = (type: any) => {
    switch (type) {
      case 'welcome':
        return (
          <View style={styles.illustrationContainer}>
            {/* Pessoas em poses dinâmicas */}
            <View style={styles.welcomeIllustration}>
              <View style={styles.person1}>
                <View style={styles.personBody} />
                <View style={styles.personHead} />
              </View>
              <View style={styles.person2}>
                <View style={styles.personBody} />
                <View style={styles.personHead} />
              </View>
              <View style={styles.person3}>
                <View style={styles.personBody} />
                <View style={styles.personHead} />
              </View>
              <View style={styles.decorativeElements}>
                <View style={styles.rectangle1} />
                <View style={styles.rectangle2} />
              </View>
            </View>
          </View>
        );
      
      case 'podcasts':
        return (
          <View style={styles.illustrationContainer}>
            {/* Player de música e pessoa */}
            <View style={styles.podcastIllustration}>
              <View style={styles.musicPlayer}>
                <View style={styles.playerHeader} />
                <View style={styles.playerIcon} />
                <View style={styles.playerControls} />
                <View style={styles.playlist} />
              </View>
              <View style={styles.personListening}>
                <View style={styles.personBody} />
                <View style={styles.personHead} />
              </View>
              <View style={styles.plant} />
            </View>
          </View>
        );
      
      case 'community':
        return (
          <View style={styles.illustrationContainer}>
            {/* Mesa redonda com pessoas */}
            <View style={styles.communityIllustration}>
              <View style={styles.roundTable} />
              <View style={styles.communityPerson1}>
                <View style={styles.personBody} />
                <View style={styles.personHead} />
              </View>
              <View style={styles.communityPerson2}>
                <View style={styles.personBody} />
                <View style={styles.personHead} />
              </View>
              <View style={styles.communityPerson3}>
                <View style={styles.personBody} />
                <View style={styles.personHead} />
              </View>
              <View style={styles.communityPerson4}>
                <View style={styles.personBody} />
                <View style={styles.personHead} />
              </View>
              <View style={styles.papers} />
            </View>
          </View>
        );
      
      case 'updates':
        return (
          <View style={styles.illustrationContainer}>
            {/* Calendário e pessoa */}
            <View style={styles.updatesIllustration}>
              <View style={styles.calendar}>
                <View style={styles.calendarHeader} />
                <View style={styles.calendarGrid} />
              </View>
              <View style={styles.personWithCalendar}>
                <View style={styles.personBody} />
                <View style={styles.personHead} />
              </View>
              <View style={styles.plant} />
            </View>
          </View>
        );
      
      default:
        return <View style={styles.illustrationContainer} />;
    }
  };

  const renderPageIndicators = () => {
    return (
      <View style={styles.indicatorContainer}>
        {onboardingData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              index === currentPage ? styles.activeIndicator : styles.inactiveIndicator
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Skip Button */}
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipText}>Pular</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Illustration */}
        {renderIllustration(onboardingData[currentPage].illustration)}

        {/* Content */}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{onboardingData[currentPage].title}</Text>
          <Text style={styles.subtitle}>{onboardingData[currentPage].subtitle}</Text>
        </View>

        {/* Page Indicators */}
        {renderPageIndicators()}

        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton} onPress={handleNext}>
          <Text style={styles.continueButtonText}>
            {onboardingData[currentPage].buttonText}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  skipButton: {
    position: 'absolute',
    top: 60,
    right: 24,
    zIndex: 1,
  },
  skipText: {
    fontSize: 16,
    color: '#8B5CF6',
    fontWeight: '500',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 120,
    paddingBottom: 40,
  },
  illustrationContainer: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
  },
  
  // Welcome Illustration
  welcomeIllustration: {
    width: 250,
    height: 200,
    position: 'relative',
  },
  person1: {
    position: 'absolute',
    left: 20,
    top: 50,
  },
  person2: {
    position: 'absolute',
    right: 60,
    top: 30,
  },
  person3: {
    position: 'absolute',
    left: 100,
    bottom: 20,
  },
  personBody: {
    width: 30,
    height: 40,
    backgroundColor: '#8B5CF6',
    borderRadius: 15,
  },
  personHead: {
    width: 20,
    height: 20,
    backgroundColor: '#F3E8FF',
    borderRadius: 10,
    marginTop: -5,
    alignSelf: 'center',
  },
  decorativeElements: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  rectangle1: {
    width: 40,
    height: 60,
    backgroundColor: '#E0E7FF',
    borderRadius: 8,
    marginBottom: 10,
  },
  rectangle2: {
    width: 60,
    height: 40,
    backgroundColor: '#F3E8FF',
    borderRadius: 8,
  },

  // Podcast Illustration
  podcastIllustration: {
    width: 250,
    height: 200,
    position: 'relative',
  },
  musicPlayer: {
    width: 120,
    height: 180,
    backgroundColor: '#374151',
    borderRadius: 12,
    position: 'absolute',
    left: 20,
  },
  playerHeader: {
    width: 100,
    height: 8,
    backgroundColor: '#6B7280',
    borderRadius: 4,
    margin: 10,
  },
  playerIcon: {
    width: 60,
    height: 60,
    backgroundColor: '#8B5CF6',
    borderRadius: 8,
    alignSelf: 'center',
    marginVertical: 10,
  },
  playerControls: {
    width: 80,
    height: 20,
    backgroundColor: '#6B7280',
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 10,
  },
  playlist: {
    flex: 1,
    margin: 10,
    backgroundColor: '#4B5563',
    borderRadius: 4,
  },
  personListening: {
    position: 'absolute',
    right: 20,
    top: 60,
  },
  plant: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 30,
    height: 50,
    backgroundColor: '#8B5CF6',
    borderRadius: 15,
  },

  // Community Illustration
  communityIllustration: {
    width: 250,
    height: 200,
    position: 'relative',
  },
  roundTable: {
    width: 120,
    height: 120,
    backgroundColor: '#8B5CF6',
    borderRadius: 60,
    position: 'absolute',
    alignSelf: 'center',
    top: 40,
    left: 65,
  },
  communityPerson1: {
    position: 'absolute',
    top: 0,
    left: 100,
  },
  communityPerson2: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  communityPerson3: {
    position: 'absolute',
    bottom: 20,
    right: 80,
  },
  communityPerson4: {
    position: 'absolute',
    bottom: 20,
    left: 40,
  },
  papers: {
    position: 'absolute',
    top: 80,
    left: 100,
    width: 50,
    height: 30,
    backgroundColor: '#F3E8FF',
    borderRadius: 4,
  },

  // Updates Illustration
  updatesIllustration: {
    width: 250,
    height: 200,
    position: 'relative',
  },
  calendar: {
    width: 140,
    height: 160,
    backgroundColor: '#8B5CF6',
    borderRadius: 12,
    position: 'absolute',
    left: 20,
    top: 20,
  },
  calendarHeader: {
    width: 120,
    height: 20,
    backgroundColor: '#6D28D9',
    borderRadius: 8,
    margin: 10,
  },
  calendarGrid: {
    flex: 1,
    margin: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  personWithCalendar: {
    position: 'absolute',
    right: 20,
    top: 80,
  },

  contentContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 34,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  indicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 6,
  },
  activeIndicator: {
    backgroundColor: '#8B5CF6',
  },
  inactiveIndicator: {
    backgroundColor: '#D1D5DB',
  },
  continueButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#8B5CF6',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  continueButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#8B5CF6',
  },
});

export default OnboardingScreen;