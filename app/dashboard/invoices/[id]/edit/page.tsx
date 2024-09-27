import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data";
import { invoices } from "@/app/lib/placeholder-data";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from "@/app/ui/invoices/edit-form";

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id
    const [invoices, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers()
    ])
    return (
        <main>
            <Breadcrumbs breadcrumbs={[

                { label: 'Invoices', href: '/dashboard/invoices' },
                {
                    label: 'Edit Invoice',
                    href: `/dashboard/invoices/${id}/edit`,
                    active: true,
                },
            ]} />
            <Form invoice={invoices} customers={customers} />
        </main>
    )
}