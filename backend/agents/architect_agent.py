from models.schemas import ArchitectureModel


def design_system(intent):

    app_type = intent.app_type

    entities = ["User"]
    pages = []
    roles = intent.roles

    if app_type == "Hospital":

        entities = [
            "Patient",
            "Doctor",
            "Appointment"
        ]

        pages = [
            "Dashboard",
            "Patients",
            "Appointments"
        ]

    elif app_type == "School ERP":

        entities = [
            "Student",
            "Teacher",
            "Course"
        ]

        pages = [
            "Dashboard",
            "Students",
            "Courses"
        ]

    elif app_type == "E-Commerce":

        entities = [
            "Product",
            "Cart",
            "Order"
        ]

        pages = [
            "Dashboard",
            "Products",
            "Orders"
        ]

    elif app_type == "CRM":

        entities = [
            "User",
            "Contact",
            "Subscription"
        ]

        pages = [
            "Dashboard",
            "Contacts"
        ]

    # Dynamic Architecture Generation

    if "analytics" in intent.modules:
        pages.append("Analytics")

    if "notifications" in intent.modules:
        pages.append("Notifications")

    if "payments" in intent.modules:
        pages.append("Billing")

    if "inventory" in intent.modules:
        pages.append("Inventory")

    pages = list(set(pages))

    return ArchitectureModel(
        entities=entities,
        pages=pages,
        roles=roles
    )
