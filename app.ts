document.addEventListener('DOMContentLoaded', function () {
  const generateButton = document.getElementById('generate-resume') as HTMLButtonElement;
  const editButton = document.getElementById('edit-resume') as HTMLButtonElement;
  const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;
  const generateUrlButton = document.getElementById('generate-url') as HTMLButtonElement;

  generateButton.addEventListener('click', function () {
      const name = (document.getElementById('name') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const phone = (document.getElementById('phone') as HTMLInputElement).value;
      const degree = (document.getElementById('degree') as HTMLInputElement).value;
      const institution = (document.getElementById('institution') as HTMLInputElement).value;
      const gradYear = (document.getElementById('gradYear') as HTMLInputElement).value;
      const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
      const company = (document.getElementById('company') as HTMLInputElement).value;
      const years = (document.getElementById('years') as HTMLInputElement).value;
      const jobDesc = (document.getElementById('jobDesc') as HTMLInputElement).value;
      const skills = (document.getElementById('skills') as HTMLInputElement).value;

      // Populate Resume Preview
      document.getElementById('display-name')!.textContent = name;
      document.getElementById('display-email')!.textContent = email;
      document.getElementById('display-phone')!.textContent = phone;
      document.getElementById('display-degree')!.textContent = degree;
      document.getElementById('display-institution')!.textContent = institution;
      document.getElementById('display-gradYear')!.textContent = gradYear;
      document.getElementById('display-jobTitle')!.textContent = jobTitle;
      document.getElementById('display-company')!.textContent = company;
      document.getElementById('display-years')!.textContent = years;
      document.getElementById('display-jobDesc')!.textContent = jobDesc;
      document.getElementById('display-skills')!.textContent = skills;

      // Hide form and show resume preview
      const form = document.getElementById('resume-form') as HTMLFormElement;
      const resumeDisplay = document.getElementById('resume-display') as HTMLElement;
      form.style.display = 'none';
      resumeDisplay.style.display = 'block';
  });

  editButton.addEventListener('click', function () {
      const form = document.getElementById('resume-form') as HTMLFormElement;
      const resumeDisplay = document.getElementById('resume-display') as HTMLElement;
      form.style.display = 'block';
      resumeDisplay.style.display = 'none';
  });

  downloadPdfButton.addEventListener('click', function () {
      alert('Download PDF feature will be implemented.');
  });

  generateUrlButton.addEventListener('click', function () {
      const name = (document.getElementById('name') as HTMLInputElement).value;
      const uniqueUrl = `${name}.vercel.app/resume`;
      alert(`Shareable link: ${uniqueUrl}`);
  });
});



