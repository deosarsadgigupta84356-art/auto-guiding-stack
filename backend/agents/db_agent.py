from schemas.app_schema import ArchitectureIR, DatabaseSchema


def generate_db_schema(architecture: ArchitectureIR):

    tables = []

    # CRM Tables

    if "User" in architecture.entities:
        tables.append({
            "name": "users",
            "fields": [
                "id",
                "email",
                "password"
            ]
        })

    if "Contact" in architecture.entities:
        tables.append({
            "name": "contacts",
            "fields": [
                "id",
                "name",
                "phone"
            ]
        })

    if "Subscription" in architecture.entities:
        tables.append({
            "name": "subscriptions",
            "fields": [
                "id",
                "user_id",
                "plan",
                "status"
            ]
        })

    # Hospital Tables

    if "Patient" in architecture.entities:
        tables.append({
            "name": "patients",
            "fields": [
                "id",
                "name",
                "age",
                "gender"
            ]
        })

    if "Doctor" in architecture.entities:
        tables.append({
            "name": "doctors",
            "fields": [
                "id",
                "name",
                "specialization"
            ]
        })

    if "Appointment" in architecture.entities:
        tables.append({
            "name": "appointments",
            "fields": [
                "id",
                "patient_id",
                "doctor_id",
                "date"
            ]
        })

    # Dynamic Tables

    if "Analytics" in architecture.pages:
        tables.append({
            "name": "analytics_reports",
            "fields": [
                "id",
                "report_name",
                "created_at"
            ]
        })

    if "Notifications" in architecture.pages:
        tables.append({
            "name": "notifications",
            "fields": [
                "id",
                "message",
                "user_id",
                "status"
            ]
        })

    if "Billing" in architecture.pages:
        tables.append({
            "name": "payments",
            "fields": [
                "id",
                "user_id",
                "amount",
                "payment_status"
            ]
        })

    return DatabaseSchema(
        tables=tables
    )
