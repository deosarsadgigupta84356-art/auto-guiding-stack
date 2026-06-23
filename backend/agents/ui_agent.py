from schemas.app_schema import ArchitectureIR, UISchema

def generate_ui_schema(architecture: ArchitectureIR):

    pages = []

    if "Dashboard" in architecture.pages:
        pages.append({
            "name": "Dashboard",
            "components": [
                "StatsCard",
                "AnalyticsChart"
            ]
        })

    if "Contacts" in architecture.pages:
        pages.append({
            "name": "Contacts",
            "components": [
                "ContactTable",
                "AddContactButton",
                "SearchBar"
            ]
        })

    if "Analytics" in architecture.pages:
        pages.append({
            "name": "Analytics",
            "components": [
                "AnalyticsChart",
                "ReportTable",
                "FilterPanel"
            ]
        })

    if "Billing" in architecture.pages:
        pages.append({
            "name": "Billing",
            "components": [
                "PaymentTable",
                "InvoiceList",
                "SubscriptionCard"
            ]
        })

    if "Notifications" in architecture.pages:
        pages.append({
            "name": "Notifications",
            "components": [
                "NotificationList",
                "SendNotificationButton"
            ]
        })

    return UISchema(
        pages=pages
    )
