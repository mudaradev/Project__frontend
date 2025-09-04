import React, { useEffect, useState } from "react";

// ✅ Card component for one clinic
function ClinicCard({ clinic }) {
  // when "Get Number" is clicked
  const handleGetNumber = () => {
    alert(`Your number for ${clinic.clinic_name} is: ${clinic.clinic_id}-001`);
  };

  // when "View Clinic Book" is clicked
  const handleViewClinicBook = () => {
    alert(`Opening clinic book for ${clinic.clinic_name}`);
    // here you can navigate to another page or open modal
  };

  return (
    <div>
      <h3>{clinic.clinic_name}</h3>
      <img src={clinic.clinic_image} alt={clinic.clinic_name} width="150" />
      <p>{clinic.clinic_details}</p>
      <p>Last Visit: {clinic.last_clinic_date}</p>
      <p>Next Visit: {clinic.next_clinic_date}</p>

      <button onClick={handleGetNumber}>Get Number</button>
      <button onClick={handleViewClinicBook}>View Clinic Book</button>
    </div>
  );
}

// ✅ Main component
export default function PatientClinics() {
  const [patient, setPatient] = useState(null); // patient + clinics data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatientClinics = async () => {
      try {
        const res = await fetch("http://localhost:5000/patients/me", {
          credentials: "include",
        });

        if (!res.ok) throw new Error("Failed to load patient data");

        const data = await res.json();
        setPatient(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPatientClinics();
  }, []);

  return (
    <div>
      <h2>My Clinics</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {patient && (
        <div>
          <h3>Welcome, {patient.name}</h3>
          <div>
            {patient.clinics.map((clinic) => (
              <ClinicCard key={clinic.clinic_id} clinic={clinic} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
