import { T } from "gt-next";

export default function AutomationTestPage() {
  return (
    <main>
      <h1>
        <T id="automation-test.heading">Your next adventure starts here</T>
      </h1>
      <p>
        <T id="automation-test.explore">
          Explore new places and save your favorite destinations.
        </T>
      </p>
      <p>
        <T id="automation-test.share">
          Share your itinerary with friends before you leave.
        </T>
      </p>
      <p>
        <T id="automation-test.reservations">
          Keep every reservation in one convenient place.
        </T>
      </p>
      <button type="button">
        <T id="automation-test.plan-trip">Plan a trip</T>
      </button>
    </main>
  );
}
