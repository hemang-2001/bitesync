import React from 'react';

const StepList = ({ steps }) => {
  return (
    <div className="space-y-6">
      <h3 className="font-serif text-xl font-bold">Instructions</h3>
      <div className="space-y-6 relative pl-2">
        {/* Vertical Line */}
        <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-border" />
        
        {steps.map((step, idx) => (
          <div key={idx} className="relative flex gap-4 group">
            {/* Step Number Bubble */}
            <div className="shrink-0 w-9 h-9 rounded-full bg-background border-2 border-primary text-primary flex items-center justify-center font-bold text-sm z-10 shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              {idx + 1}
            </div>
            
            {/* Step Content */}
            <div className="pt-1 pb-4">
              <p className="text-base text-foreground/90 leading-relaxed">
                {step}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepList;
