/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Landing } from './components/Landing';
import { ApplicationForm } from './components/ApplicationForm';
import { Analyzing } from './components/Analyzing';
import { Approved } from './components/Approved';

type Step = 'landing' | 'form' | 'analyzing' | 'approved';

export default function App() {
  const [currentStep, setCurrentStep] = useState<Step>('landing');
  const [userName, setUserName] = useState<string>('');

  return (
    <>
      {currentStep === 'landing' && <Landing onApply={() => setCurrentStep('form')} />}
      {currentStep === 'form' && <ApplicationForm onComplete={(name) => { setUserName(name); setCurrentStep('analyzing'); }} />}
      {currentStep === 'analyzing' && <Analyzing userName={userName} onComplete={() => setCurrentStep('approved')} />}
      {currentStep === 'approved' && <Approved userName={userName} />}
    </>
  );
}
